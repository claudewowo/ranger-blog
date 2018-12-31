const emoji = require('markdown-it-emoji');
const mdCheckbox = require('markdown-it-checkbox');
const mdSmartArrows = require('markdown-it-smartarrows');
const mdDivs = require('markdown-it-div');
const md = require('markdown-it')({ html: true });
const ArticlesModel = require('../models/articles');

md.use(emoji)
    .use(mdCheckbox, {
        divWrap: true,
        divClass: 'checkbox',
        idPrefix: 'checkbox_'
    })
    .use(mdSmartArrows)
    .use(mdDivs);

const findAll = async (ctx, next) => {
    const { query: { draft } } = ctx.request;
    const drafts = draft === undefined ? 0 : +draft;
    const filter = {};

    if (drafts === 0) {
        filter.isDraft = 0;
    } else if (drafts === 2) {
        filter.isDraft = 1;
    }

    try {
        await ArticlesModel.find(filter).sort({ updatedAt: -1 })
            .then((res) => {
                if (res.length) {
                    res.forEach((article) => {
                        const { content } = article;
                        if (content) {
                            article.content = md.render(content);
                        } else {
                            article.content = '';
                        }
                    });
                }
                ctx.response.body = res;
                next(ctx, next);
            });
    } catch (err) {
        ctx.response.body = err;
        next(ctx, next);
        console.log('err ---', err);
    }
};

const findOne = async (ctx, next) => {
    const id = ctx.request.url.split('/detail/');
    try {
        await ArticlesModel.findOne({ path: id[1] })
            .then((article) => {
                const { content } = article;
                if (content) {
                    article.content = md.render(content);
                } else {
                    article.content = '';
                }
                ctx.response.body = article;
                next(ctx, next);
            });
    } catch (err) {
        ctx.response.body = err;
        next(ctx, next);
        console.log('err ---', err);
    }
};

const save = async (ctx, next) => {
    const article = new ArticlesModel(ctx.request.body);
    try {
        await article.save();
        return { success: true };
    } catch (err) {
        const msgArr = [];
        for (const errName in err.errors) {
            msgArr.push(err.errors[errName].message);
        }
        return { success: false, msg: msgArr[0] };
    }
};

const update = async (ctx, next) => {
    const article = new ArticlesModel(ctx.request.body);
    try {
        await article.update()
            .then((res) => {
                ctx.response.body = res;
                next(ctx, next);
            });
    } catch (err) {
        ctx.response.body = err;
    }
};

const remove = async (ctx, next) => {
    await ArticlesModel.remove((err, res) => {

    });
};

module.exports = {
    findAll,
    findOne,
    save,
    update,
    remove,
};