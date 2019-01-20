const moment = require('moment');
const emoji = require('markdown-it-emoji');
const mdCheckbox = require('markdown-it-checkbox');
const mdSmartArrows = require('markdown-it-smartarrows');
const mdDivs = require('markdown-it-div');
const md = require('markdown-it')({ html: true });
const ArticlesModel = require('../models/articles');
const stuffs = require('../models/stuffs');
const Utils = require('../utils/utils');

md.use(emoji)
    .use(mdCheckbox, {
        divWrap: true,
        divClass: 'checkbox',
        idPrefix: 'checkbox_'
    })
    .use(mdSmartArrows)
    .use(mdDivs);

/**
 *
 * @param {*page} page
 * @param {*pagesize} pagesize
 * @param {*drafts} drafts 1: 全部 0:非草稿 2:草稿
 */
const findAll = async (ctx, next) => {
    const { draft } = ctx.request.query;
    const drafts = draft === undefined ? 0 : +draft;
    let { page, pagesize } = ctx.request.query;
    const filter = {};
    page = (page - 1) || 0;
    pagesize = pagesize || 12;

    if (drafts === 0) {
        filter.isDraft = 0;
    } else if (drafts === 2) {
        filter.isDraft = 1;
    }

    try {
        const total = await ArticlesModel.countDocuments();
        await ArticlesModel.find(filter)
            .limit(pagesize)
            .skip(page * pagesize)
            .sort({ createdAt: -1 })
            .then((list) => {
                if (list.length) {
                    list.forEach((article) => {
                        const { content } = article;
                        if (content) {
                            article.origin = content || '';
                            article.content = md.render(content);
                        } else {
                            article.content = '';
                        }
                    });
                }
                ctx.body = {
                    total,
                    pagesize,
                    page,
                    list,
                };
                next(ctx, next);
            });
    } catch (err) {
        ctx.body = err;
        next(ctx, next);
        console.log('err ---', err);
    }
};

const findOne = async (ctx, next) => {
    const { id } = ctx.query;
    try {
        const article = await ArticlesModel.findOne({ path: id });
        if (article) {
            const attachment = await stuffs.findOne({ articleId: id });
            article.stuffs = attachment || {};
            const { _id } = article;
            let prevItem = await ArticlesModel.find({ _id: { $lt: _id } }).sort({ _id: -1 }).limit(1);
            if (prevItem.length > 0) {
                prevItem = prevItem[0];
            }
            let nextItem = await ArticlesModel.find({ _id: { $gt: _id } }).sort({ _id: 1 }).limit(1);
            if (nextItem.length > 0) {
                nextItem = nextItem[0];
            }
            const { content } = article;
            if (content) {
                article.origin = content || '';
                article.content = md.render(content);
            } else {
                article.content = '';
            }

            ctx.body = {
                prevItem,
                article,
                nextItem,
            };
            if (next) {
                return next(ctx, next);
            }
        }
    } catch (err) {
        ctx.body = err;
        if (next) {
            return next(ctx, next);
        }
        console.log('err ---', err);
    }
    return ctx;
};

const save = async (ctx, next) => {
    const { body } = ctx.request;
    const articleData = body.article;
    const { path, title, date } = articleData;
    articleData.date = moment(+date).format('YYYY-MM-DD');

    if (!title) {
        ctx.body = { status: 1, msg: '文章标题 不能为空' };
    } else {
        if (path) {
            articleData.path = `${path}-${Utils.today()}`;
        } else {
            articleData.path = +new Date();
        }

        const isExists = await ArticlesModel.findOne({ path: articleData.path });
        if (isExists) {
            ctx.body = { status: 1, msg: '文章id 已存在' };
        }

        try {
            const article = new ArticlesModel(articleData);
            await article.save();
            ctx.body = { status: 0, msg: '发布成功!' };
        } catch (err) {
            ctx.body = { status: 1, msg: Utils.unexpected(err) };
        }
    }
    next(ctx);
};

const update = async (ctx, next) => {
    const { _id, article } = ctx.request.body;

    try {
        const res = await ArticlesModel.findOneAndUpdate({ _id }, article, {
            new: true,
            useFindAndModify: false,
        });

        if (res === null) {
            ctx.body = { status: 1, msg: '更新失败 (-_-)' };
        } else {
            ctx.body = { status: 0, msg: '更新成功!' };
        }
    } catch (err) {
        ctx.body = { status: 1, msg: Utils.unexpected(err) };
    }

    next(ctx);
};

const remove = async (ctx, next) => {
    const { _id } = ctx.request.body;
    try {
        const { deletedCount } = await ArticlesModel.deleteOne({ _id });
        if (deletedCount) {
            ctx.body = { status: 0, msg: '删除成功!' };
        } else {
            ctx.body = { status: 1, msg: '删除失败' };
        }
    } catch (err) {
        ctx.body = { status: 1, msg: Utils.unexpected(err) };
    }
    next(ctx);
};

module.exports = {
    findAll,
    findOne,
    save,
    update,
    remove,
};
