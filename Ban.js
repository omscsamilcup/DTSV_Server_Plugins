'use strict';

var version$1 = "1.1.0";
var description = "Improved version of LxlBlackBe";

const PLUGIN_NAME = 'LLBlackBEEx';
const PLUGIN_VERSION = (version$1.split('.').map((v) => Number(v)));
const PLUGIN_DESCRIPTION = description;
const PLUGIN_EXTRA = {
    Author: 'student_2333',
    License: 'Apache-2.0',
};
logger.setTitle(PLUGIN_NAME);
logger.setFile(`logs/${PLUGIN_NAME}.log`);
const PLUGIN_ROOT = `./plugins/${PLUGIN_NAME}`;
const DATA_PATH = `${PLUGIN_ROOT}/data`;
if (!file.exists(DATA_PATH))
    file.mkdir(DATA_PATH);

var version = "0.5.2";

const NAME = 'FormAPIEx';
(version.split('.').map((v) => Number(v)));
const FormClose = Symbol(`${NAME}_FormClose`);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * 格式化错误堆栈
 * @param e 错误对象
 * @returns 格式化后的错误
 */
function formatError(e) {
    return e instanceof Error ? `${e.message}\n${e.stack}` : String(e);
}
/**
 * 在 sync function 中使用 setTimeout 调用 async function，解决 LLSE 回调调用 async 函数会出现的玄学 bug
 * @param func async function
 * @returns wrapped sync function
 */
function wrapAsyncFunc(func) {
    return (...args) => {
        setTimeout(() => func(...args).catch((e) => logger.error(formatError(e))), 0);
    };
}
/**
 * 使用 json 序列化及反序列化深复制对象
 * @param obj 对象
 * @returns 复制后对象
 */
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
function sendFormAsync(player, form) {
    return new Promise((resolve) => {
        player.sendForm(form, (_, data) => setTimeout(() => resolve(data === null || data === undefined ? FormClose : data), 0));
    });
}

var _CustomFormEx_objects;
/**
 * 使用 CustomFormObject 构建自定义表单对象
 * @param formTitle 表单标题
 * @param objects 表单元素
 * @returns 构建好的表单
 */
function buildCustomForm(formTitle, objects) {
    const form = mc.newCustomForm();
    form.setTitle(formTitle);
    for (const obj of objects) {
        switch (obj.type) {
            case 'label': {
                form.addLabel(obj.text);
                break;
            }
            case 'input': {
                const { title, placeholder, defaultVal } = obj;
                form.addInput(title, placeholder ?? '', defaultVal ?? '');
                break;
            }
            case 'switch': {
                const { title, defaultVal } = obj;
                form.addSwitch(title, defaultVal ?? false);
                break;
            }
            case 'dropdown': {
                const { title, items, defaultVal } = obj;
                form.addDropdown(title, items, defaultVal ?? 0);
                break;
            }
            case 'slider': {
                const { title, min, max, step, defaultVal } = obj;
                form.addSlider(title, min, max, step ?? 1, defaultVal ?? min);
                break;
            }
            case 'stepSlider': {
                const { title, items, defaultVal } = obj;
                form.addStepSlider(title, items, defaultVal ?? 0);
                break;
            }
            // no default
        }
    }
    return form;
}
class CustomFormEx {
    /**
     * @param title 表单标题
     */
    constructor(title = '') {
        /** 表单标题 */
        this.title = '';
        _CustomFormEx_objects.set(this, []);
        this.title = title;
    }
    /**
     * 获取表单元素列表
     */
    get objects() {
        return deepClone(__classPrivateFieldGet(this, _CustomFormEx_objects, "f"));
    }
    /**
     * 获取表单元素数量
     */
    get length() {
        return __classPrivateFieldGet(this, _CustomFormEx_objects, "f").length;
    }
    /**
     * 设置表单标题
     * @param val 标题
     * @returns 自身，便于链式调用
     */
    setTitle(val) {
        this.title = val;
        return this;
    }
    // add object
    // 格式化之后着色有问题
    // prettier-ignore
    /**
     * 向表单尾部添加一个元素
     * @param id 元素 id
     * @param obj 元素
     * @returns 自身，便于链式调用
     */
    push(id, obj) {
        __classPrivateFieldGet(this, _CustomFormEx_objects, "f").push([id, obj]);
        return this;
    }
    // prettier-ignore
    /**
     * 向表单头部添加一个元素
     * @param id 元素 id
     * @param obj 元素
     * @returns 自身，便于链式调用
     */
    unshift(id, obj) {
        __classPrivateFieldGet(this, _CustomFormEx_objects, "f").unshift([id, obj]);
        return this;
    }
    // prettier-ignore
    /**
     * 向表单插入一个元素
     * @param index 插入位置
     * @param id 元素 id
     * @param obj 元素
     * @returns 自身，便于链式调用
     */
    insert(index, id, obj) {
        __classPrivateFieldGet(this, _CustomFormEx_objects, "f").splice(index, 0, [id, obj]);
        return this;
    }
    // remove object
    /**
     * 删除表单元素
     * @param id 元素 id
     * @returns 自身，便于链式调用
     */
    remove(id) {
        for (let i = 0; i < __classPrivateFieldGet(this, _CustomFormEx_objects, "f").length; i += 1) {
            const [objId] = __classPrivateFieldGet(this, _CustomFormEx_objects, "f")[i];
            if (objId === id) {
                __classPrivateFieldGet(this, _CustomFormEx_objects, "f").splice(i, 1);
                break;
            }
        }
        return this;
    }
    get(id) {
        if (typeof id === 'number')
            return __classPrivateFieldGet(this, _CustomFormEx_objects, "f")[id];
        for (const [objId, val] of __classPrivateFieldGet(this, _CustomFormEx_objects, "f")) {
            if (objId === id)
                return val;
        }
        return null;
    }
    addLabel(arg1, arg2) {
        const id = arg2 ? arg1 : undefined;
        const text = arg2 ?? arg1;
        return this.push(id, { type: 'label', text });
    }
    /**
     * 向表单添加一个输入框
     * @param id 元素 id
     * @param title 输入框标题
     * @param options 附加选项
     * @returns 自身，便于链式调用
     */
    addInput(id, title, options = {}) {
        const { placeholder, default: defaultVal } = options;
        return this.push(id, {
            type: 'input',
            title,
            placeholder,
            defaultVal,
        });
    }
    /**
     * 向表单添加一个开关
     * @param id 元素 id
     * @param title 开关标题
     * @param defaultVal 开关默认状态，默认为 `false`
     * @returns 自身，便于链式调用
     */
    addSwitch(id, title, defaultVal = false) {
        return this.push(id, { type: 'switch', title, defaultVal });
    }
    /**
     * 向表单添加一个下拉框
     * @param id 元素 id
     * @param title 下拉框标题
     * @param items 下拉框元素
     * @param defaultVal 下拉框默认选择元素位置，默认为 `0`
     * @returns 自身，便于链式调用
     */
    addDropdown(id, title, items, defaultVal = 0) {
        return this.push(id, { type: 'dropdown', title, items, defaultVal });
    }
    /**
     * 向表单添加一个滑块
     * @param id 元素 id
     * @param title 滑块标题
     * @param min 滑块最小值
     * @param max 滑块最大值
     * @param options 附加选项
     * @returns 自身，便于链式调用
     */
    addSlider(id, title, min, max, options = {}) {
        const { step, default: defaultVal } = options;
        return this.push(id, { type: 'slider', title, min, max, step, defaultVal });
    }
    /**
     * 向表单添加一个步进滑块
     * @param id 元素 id
     * @param title 步进滑块标题
     * @param items 步进滑块元素列表
     * @param defaultVal 滑块默认位置，默认为 `0`
     * @returns 自身，便于链式调用
     */
    addStepSlider(id, title, items, defaultVal = 0) {
        return this.push(id, { type: 'stepSlider', title, items, defaultVal });
    }
    // send
    parseReturn(data) {
        const res = {};
        for (let i = 0; i < data.length; i += 1) {
            const [id] = __classPrivateFieldGet(this, _CustomFormEx_objects, "f")[i];
            const val = data[i] ?? undefined;
            if (id)
                res[id] = val;
        }
        return res;
    }
    /**
     * 异步向玩家发送该表单
     * @param player 玩家对象
     * @returns 返回结果，玩家关闭表单或发送失败返回 FormClose
     */
    async sendAsync(player) {
        const data = await sendFormAsync(player, buildCustomForm(this.title, this.objects.map((v) => v[1])));
        if (data === FormClose)
            return FormClose;
        return this.parseReturn(data);
    }
}
_CustomFormEx_objects = new WeakMap();

/**
 * 异步向玩家发送模式表单
 * @param player 玩家对象
 * @param title 表单标题
 * @param content 表单内容
 * @param confirmButton 确认按钮标题
 * @param cancelButton 取消按钮标题
 * @returns 玩家选择的按钮
 */
function sendModalFormAsync(player, title, content, confirmButton = '§a确认', cancelButton = '§c取消') {
    // 不知道怎么回事按取消会返回 null / undefined，干脆直接转 boolean
    return new Promise((resolve) => {
        player.sendModalForm(title, content, confirmButton, cancelButton, (_, data) => setTimeout(() => resolve(!!data), 0));
    });
}

class SimpleFormAsync {
    /**
     * @param options 附加选项
     */
    constructor(options = {}) {
        /** 表单标题 */
        this.title = '';
        /** 表单内容 */
        this.content = '';
        /** 表单按钮 `[ text, image ]` */
        this.buttons = [];
        const { title, content, buttons } = options;
        if (title)
            this.title = title;
        if (content)
            this.content = content;
        if (buttons)
            this.buttons = buttons;
    }
    /**
     * 设置表单标题
     * @param val 标题
     * @returns 自身，便于链式调用
     */
    setTitle(val) {
        this.title = val;
        return this;
    }
    /**
     * 设置表单内容
     * @param val 内容
     * @returns 自身，便于链式调用
     */
    setContent(val) {
        this.content = val;
        return this;
    }
    /**
     * 给表单添加一个按钮
     * @param text 按钮文本
     * @param image 按钮图片
     * @returns 自身，便于链式调用
     */
    addButton(text, image) {
        this.buttons.push([text, image]);
        return this;
    }
    /**
     * 异步向玩家发送该表单
     * @param player 玩家对象
     * @returns 玩家选择的按钮序号，玩家关闭表单或发送失败返回 FormClose
     */
    sendAsync(player) {
        const form = mc
            .newSimpleForm()
            .setTitle(this.title)
            .setContent(this.content);
        this.buttons.forEach(([text, image]) => {
            if (image)
                form.addButton(text, image);
            else
                form.addButton(text);
        });
        return sendFormAsync(player, form);
    }
}

class SimpleFormEx {
    /**
     * @param buttons 表单按钮参数
     */
    constructor(buttons = []) {
        /** 表单标题 */
        this.title = '';
        /**
         * 表单内容
         *
         * 可用变量
         * - `{{currentPage}}` - 当前页数
         * - `{{maxPage}}` - 最大页数
         * - `{{count}}` - 条目总数
         */
        this.content = '§a第 §e{{currentPage}} §f/ §6{{maxPage}} §a頁 §7| §a共 §e{{count}} §a個項目';
        /** 表单按钮参数列表 */
        this.buttons = [];
        /**
         * 表单按钮格式化函数
         * @param v 表单按钮对应的参数
         * @param index 按钮对应的位置
         * @param array 整个表单按钮参数列表
         * @returns 格式化后的按钮 `[ text, image ]`
         */
        // eslint-disable-next-line class-methods-use-this
        this.formatter = (v) => [`§3${String(v)}`];
        /** 表单是否可翻页 */
        this.canTurnPage = false;
        /** 表单是否显示跳页按钮 */
        this.canJumpPage = false;
        /** 表单每页最大项目数 */
        this.maxPageNum = 15;
        /** 表单是否显示搜索按钮 */
        this.hasSearchButton = false;
        // eslint-disable-next-line class-methods-use-this
        /**
         * 表单按钮搜索函数
         * @param buttons 整个表单按钮参数列表
         * @param param 搜索关键词参数
         * @returns 搜索到的按钮参数列表
         */
        this.searcher = (buttons, param) => {
            const params = param.toLowerCase().split(/\s/g);
            const formatted = this.formatButtons(buttons).map((v) => v[0].toLowerCase());
            const result = [];
            for (const it of formatted) {
                const score = params.reduce((acc, cur) => acc + (it.includes(cur) ? 1 : 0), 0);
                if (score)
                    result.push([score, buttons[formatted.indexOf(it)]]);
            }
            return result.sort(([a], [b]) => b - a).map((v) => v[1]);
        };
        this.buttons = buttons;
    }
    /**
     * 格式化给定按钮
     * @param buttons 表单按钮参数列表
     * @returns 格式化后的按钮
     */
    formatButtons(buttons = this.buttons) {
        return buttons.map(this.formatter);
    }
    /**
     * @returns 表单最大页数
     */
    getMaxPageNum() {
        return this.canTurnPage
            ? Math.ceil(this.buttons.length / this.maxPageNum)
            : 1;
    }
    /**
     * 获取对应页数的按钮参数列表
     * @param page 页码
     * @returns 按钮参数列表
     */
    getPage(page = 1) {
        if (page > this.getMaxPageNum())
            return [];
        return this.buttons.slice((page - 1) * this.maxPageNum, page * this.maxPageNum);
    }
    /**
     * 异步向玩家发送搜索表单
     * @param player 玩家对象
     * @param defaultVal 搜索框默认内容
     * @returns 选择的搜索结果按钮参数。返回 null 为没搜到, FormClose 为取消搜索
     */
    async sendSearchForm(player, defaultVal = '') {
        const form = new CustomFormEx(this.title);
        const res = await form
            .addInput('param', '請輸入你要搜尋的内容', { default: defaultVal })
            .sendAsync(player);
        if (res === FormClose)
            return FormClose;
        const searched = this.searcher(this.buttons, res.param);
        if (!searched.length) {
            await new SimpleFormAsync({
                title: this.title,
                content: '§6沒有搜索到結果',
            }).sendAsync(player);
            return null;
        }
        const searchForm = new SimpleFormEx();
        searchForm.title = this.title;
        searchForm.content = `§a為你找到了 §l§6${searched.length} §r§a個結果\n${searchForm.content}`;
        searchForm.buttons = searched;
        searchForm.formatter = this.formatter;
        searchForm.canTurnPage = this.canTurnPage;
        searchForm.canJumpPage = this.canJumpPage;
        searchForm.maxPageNum = this.maxPageNum;
        searchForm.hasSearchButton = false;
        const selected = await searchForm.sendAsync(player);
        return selected === FormClose ? FormClose : selected;
    }
    /**
     * 异步向玩家发送表单
     * @param player 玩家对象
     * @param page 页码
     * @returns 给定的按钮参数，表单被玩家关闭或发送失败返回 FormClose
     */
    async sendAsync(player, page = 1) {
        const buttons = this.canTurnPage ? this.getPage(page) : this.buttons;
        const formattedButtons = this.formatButtons(buttons);
        const maxPage = this.getMaxPageNum();
        const pageAboveOne = maxPage > 1;
        const hasJumpBtn = this.canJumpPage && pageAboveOne;
        const hasPreviousPage = page > 1 && pageAboveOne;
        const hasNextPage = page < maxPage && pageAboveOne;
        if (hasPreviousPage)
            formattedButtons.unshift(['§2<- 上一頁']);
        if (hasJumpBtn)
            formattedButtons.unshift(['§1跳也']);
        if (this.hasSearchButton)
            formattedButtons.unshift(['§1搜索']);
        if (hasNextPage)
            formattedButtons.push(['§2下一頁 ->']);
        const formatContent = (content) => {
            const count = this.buttons.length;
            const formatMap = {
                currentPage: page,
                maxPage,
                count,
            };
            for (const [key, val] of Object.entries(formatMap)) {
                content = content.replaceAll(`{{${key}}}`, String(val));
            }
            return content;
        };
        const resultIndex = await new SimpleFormAsync({
            title: this.title,
            content: formatContent(this.content),
            buttons: formattedButtons,
        }).sendAsync(player);
        if (resultIndex === FormClose)
            return FormClose;
        let offset = 0;
        if (this.hasSearchButton) {
            if (resultIndex === offset) {
                const res = await this.sendSearchForm(player);
                return res === null || res === FormClose
                    ? this.sendAsync(player, page)
                    : res;
            }
            offset += 1;
        }
        if (hasJumpBtn) {
            if (resultIndex === offset) {
                const res = await new CustomFormEx(this.title)
                    .addSlider('num', '請選擇你要跳頁的頁數', 1, maxPage, {
                    default: page,
                })
                    .sendAsync(player);
                return this.sendAsync(player, res === FormClose ? page : res.num);
            }
            offset += 1;
        }
        if (hasPreviousPage) {
            if (resultIndex === offset) {
                return this.sendAsync(player, page - 1);
            }
            offset += 1;
        }
        if (hasNextPage && resultIndex + 1 === formattedButtons.length) {
            return this.sendAsync(player, page + 1);
        }
        const realIndex = resultIndex - offset;
        return buttons[realIndex];
    }
}

const configPath = `${DATA_PATH}/config.json`;
const localListPath = `${DATA_PATH}/localList.json`;
const config = {
    apiToken: '',
    banIp: true,
    banDevice: true,
    hidePassMessage: true,
    disableBlackBE: true,
    kickByCloudMsg: "§l§7You are disconnected from the server\\n\\n§l§cYou are temprarily banned until §l§f%ENDTIME% from DTSV Server!\\n\\n§l§7Reason: §f%REASON%\\n§l§7Appeal Here: https://discord.gg/dBUVcJVrWr",
    kickByLocalMsg: "§l§7You are disconnected from the server\\n\\n§l§cYou are temprarily banned until §l§f%ENDTIME% from DTSV Server!\\n\\n§l§7Reason: §f%REASON%\\n§l§7Appeal Here: https://discord.gg/dBUVcJVrWr",
    serverName: '',
    apiHost: 'https://api.blackbe.work/',
    clearCacheInterval: 3600000,
    registerBanCommand: true,
    checkLocalListInterval: 5000,
    processOnPreJoin: true,
    onlyOpCanQuery: false,
    pardonBlackBE: [],
};
const localList = { list: [] };
function saveConfig() {
    file.writeTo(configPath, JSON.stringify(config, null, 2));
}
function saveLocalList() {
    file.writeTo(localListPath, JSON.stringify(localList, null, 2));
}
function reloadConfig() {
    function loadConfig(path, overrideConfig) {
        const content = file.readFrom(path);
        if (!content)
            throw new Error(`failed to read ${path}`);
        Object.entries(JSON.parse(content)).forEach(([k, v]) => {
            Object.defineProperty(overrideConfig, k, { value: v });
        });
        return overrideConfig;
    }
    if (!file.exists(configPath))
        saveConfig();
    if (!file.exists(localListPath))
        saveLocalList();
    loadConfig(configPath, config);
    loadConfig(localListPath, localList);
    saveConfig();
    let localListChanged = false;
    for (const bl of localList.list) {
        if (bl.ip) {
            bl.ips = [bl.ip];
            bl.clientIds = [];
            delete bl.ip;
            localListChanged = true;
        }
    }
    if (localListChanged)
        saveLocalList();
}
reloadConfig();

function formatDate(options = {}) {
    const date = options.date ?? new Date();
    const withTime = options.withTime ?? true;
    const yr = date.getFullYear();
    const mon = date.getMonth() + 1;
    const day = date.getDate();
    let formatted = `${yr}-${mon}-${day}`;
    if (withTime) {
        const padNum = (n) => n.toString().padStart(2, '0');
        const hr = date.getHours();
        const min = padNum(date.getMinutes());
        const sec = padNum(date.getSeconds());
        formatted += ` ${hr}:${min}:${sec}`;
    }
    return formatted;
}
function delFormatCode(text) {
    return text.replace(/§[0-9abcdefgklmnor]/g, '');
}
function checkValInArray(arr, callback) {
    for (const it of arr)
        if (callback(it))
            return true;
    return false;
}
function stripIp(ip) {
    return ip.split(':')[0];
}
function pushNoDuplicateItem(list, item) {
    if (!list.includes(item))
        list.push(item);
    return list;
}
function setupFunctionalityForm(buttons) {
    const form = new SimpleFormEx(buttons);
    form.title = PLUGIN_NAME;
    form.formatter = (v) => [`§3${v[0]}`];
    return form;
}
async function processListFormReturn(res) {
    if (res) {
        const [, func] = res;
        if (!func)
            return false;
        func();
    }
    return true;
}
function getOnlineRealPlayers() {
    return mc.getOnlinePlayers().filter((p) => !p.isSimulatedPlayer());
}
function formatVarString(str, vars) {
    return str.replace(/%([a-zA-Z0-9_]+)%/g, (m, p1) => vars[p1] ?? m);
}
function logErr(err) {
    logger.error(formatError(err));
}
class RequestError extends Error {
    constructor(status, url, data) {
        super(`Request '${url}' failed with code ${status}: ` +
            `${data.length > 50 ? `${data.slice(0, 50)}...` : data}`);
        this.status = status;
        this.url = url;
        this.data = data;
        this.name = 'RequestError';
    }
}
function appendParamsToUrl(url, params) {
    if (!params)
        return url;
    const queryString = Object.entries(params)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
    return url.includes('?') ? `${url}&${queryString}` : `${url}?${queryString}`;
}
function normalizeHeaders(headers) {
    const normalized = {};
    for (const [k, v] of Object.entries(headers))
        normalized[k] = `${v}`;
    return normalized;
}
async function getAsync(options) {
    const doGet = (url, headers) => new Promise((resolve, reject) => {
        network.httpGet(url, headers, (status, result) => {
            if (status !== 200)
                reject(new RequestError(status, url, result));
            else
                resolve(result);
        });
    });
    const { url, params, headers, responseType } = options;
    const urlWithParams = appendParamsToUrl(url, params);
    const normalizedHeaders = headers ? normalizeHeaders(headers) : {};
    const res = await doGet(urlWithParams, normalizedHeaders);
    return responseType === 'json' ? JSON.parse(res) : res;
}
async function postAsync(options) {
    const doPost = (url, headers, data, contentType) => new Promise((resolve, reject) => {
        network.httpPost(url, headers, data, contentType, (status, result) => {
            if (status !== 200)
                reject(new RequestError(status, url, result));
            else
                resolve(result);
        });
    });
    const { url, params, headers, data, responseType } = options;
    const isDataText = typeof data === 'string';
    const dataString = isDataText ? data : JSON.stringify(data);
    const contentType = headers?.['Content-Type'] ??
        (isDataText ? 'text/plain' : 'application/json');
    const urlWithParams = appendParamsToUrl(url, params);
    const normalizedHeaders = headers ? normalizeHeaders(headers) : {};
    const res = await doPost(urlWithParams, normalizedHeaders, dataString, contentType);
    return responseType === 'json' ? JSON.parse(res) : res;
}

function formatLocalKickMsg(data) {
    const { reason, endTime } = data;
    return formatVarString(config.kickByLocalMsg, {
        NAME: data.name ?? 'NaN',
        XUID: data.xuid ?? 'NaN',
        REASON: reason ?? 'Banned by Admin',
        ENDTIME: endTime ? formatDate({ date: new Date(endTime) }) : 'Forever',
    });
}
function banPlayer(data, options = {}) {
    let name;
    let xuid;
    let ip;
    let clientId;
    if ('player' in data) {
        const { player } = data;
        ({ realName: name, xuid } = player);
        ({ ip, clientId } = player.getDevice());
    }
    else {
        ({ name, xuid, ip, clientId } = data);
    }
    if (ip)
        ip = stripIp(ip);
    const queryParams = [name, xuid, ip, clientId].filter((v) => v);
    if (!queryParams.length)
        return false;
    const results = [];
    for (const it of localList.list) {
        if ((name && name === it.name) ||
            (xuid && xuid === it.xuid) ||
            (ip && it.ips && it.ips.includes(ip)) ||
            (clientId && it.clientIds && it.clientIds.includes(clientId)))
            results.push(it);
    }
    const isModify = !!results.length;
    if (!isModify) {
        const it = {
            ips: [],
            clientIds: [],
        };
        localList.list.push(it);
        results.push(it);
    }
    const { time, reason } = options;
    const endTime = time ? new Date(Date.now() + time).toJSON() : undefined;
    for (const it of results) {
        if (name)
            it.name = name;
        if (xuid)
            it.xuid = xuid;
        if (ip)
            it.ips = pushNoDuplicateItem(it.ips || [], ip);
        if (clientId)
            it.clientIds = pushNoDuplicateItem(it.clientIds || [], clientId);
        if (endTime)
            it.endTime = endTime;
        if (reason)
            it.reason = reason;
    }
    if ('player' in data) {
        const { kickTip } = options;
        data.player.kick(kickTip ?? formatLocalKickMsg(results[0]));
    }
    saveLocalList();
    return { isModify, results };
}
function queryLocal(param, moreInfo = false, strict = false) {
    param = param.trim();
    const params = strict ? [param] : param.split(/\s/g);
    const ret = [];
    for (const it of localList.list) {
        const { name, xuid, ips, clientIds } = it;
        const willCheck = [name, xuid];
        if (moreInfo) {
            if (ips)
                willCheck.push(...ips);
            if (clientIds)
                willCheck.push(...clientIds);
        }
        for (const val of willCheck) {
            if (val &&
                checkValInArray(params, (pr) => strict ? val === pr : val.includes(pr))) {
                ret.push(it);
                break;
            }
        }
    }
    return ret;
}
function formatLocalInfo(obj, moreInfo = false) {
    const formatList = (li) => li && li.length ? `\n${li.map((v) => `  - §b${v}§r`).join('\n')}` : '§b无';
    const { name, xuid, ips, endTime, clientIds, reason } = obj;
    const lines = [];
    lines.push(`§2玩家ID§r： §l§d${name ?? '未知'}§r`);
    lines.push(`§2XUID§r： §b${xuid ?? '未知'}`);
    lines.push(`§2封禁原因§r： §b${reason ?? '无'}`);
    if (moreInfo)
        lines.push(`§2結束時間§r： §b${endTime ? formatDate({ date: new Date(endTime) }) : 'Forever'}`);
    if (moreInfo)
        lines.push(`§2已記錄的IP§r： ${formatList(ips)}`);
    if (moreInfo)
        lines.push(`§2已記錄設備ID§r： ${formatList(clientIds)}`);
    return lines.join('\n');
}

({
    xuid: '1000000000000000',
    info: '无',
    server: config.serverName,
    time: formatDate({ withTime: false }),
    qq: 1000000000,
    area_code: '+86',
    phone: 10000000000,
});
const cachedPrivResp = [];
function getHeaders(auth = true) {
    const headers = {};
    if (auth && config.apiToken)
        headers.Authorization = `Bearer ${config.apiToken}`;
    return headers;
}
function buildUrl(path, slashEnd = false) {
    let { apiHost } = config;
    if (!apiHost.endsWith('/'))
        apiHost = `${apiHost}/`;
    if (slashEnd && !path.endsWith('/'))
        path = `${path}/`;
    return `${apiHost}openapi/v3/${path}`;
}
function checkIsWithToken(options) {
    const withToken = options.withToken ?? true;
    delete options.withToken;
    return withToken;
}
async function getPrivateRespList() {
    const resp = await getAsync({
        url: buildUrl('private/repositories/list'),
        headers: getHeaders(),
        responseType: 'json',
    });
    cachedPrivResp.length = 0;
    cachedPrivResp.push(...resp.data.repositories_list);
    return resp;
}
function check(options) {
    const withToken = checkIsWithToken(options);
    return getAsync({
        url: buildUrl('check', true),
        params: options,
        headers: getHeaders(withToken),
        responseType: 'json',
    });
}
async function checkPrivate(options) {
    if (!cachedPrivResp.length)
        await getPrivateRespList();
    return postAsync({
        url: buildUrl('check/private'),
        params: options,
        data: { repositories_uuid: cachedPrivResp.map((v) => v.uuid) },
        headers: getHeaders(),
        responseType: 'json',
    });
}
async function getRepoByUuid(uuid) {
    if (uuid === '1')
        return {
            uuid,
            name: '公有库',
            type: 1,
            list_num: 0,
            server: '',
            server_type: '',
        };
    if (!cachedPrivResp.length)
        await getPrivateRespList();
    for (const resp of cachedPrivResp)
        if (resp.uuid === uuid)
            return resp;
    return null;
}
function formatBlackBELvl(lvl) {
    switch (lvl) {
        case 1:
            return ['有作弊行为，但未对其他玩家造成实质上损害', '§e'];
        case 2:
            return ['有作弊行为，且对玩家造成一定的损害', '§g'];
        case 3:
            return ['严重破坏服务器，对玩家和服务器造成较大的损害', '§c'];
        default:
            return ['未知', '§r'];
    }
}
async function formatBlackBEInfo(obj, moreInfo = false) {
    const isPriv = 'phone' in obj;
    const { uuid, name, xuid, info, level, qq, black_id } = obj;
    const repo = await getRepoByUuid(black_id);
    const repoName = repo ? repo.name : '未知';
    const [lvlDesc, lvlColor] = formatBlackBELvl(level);
    const lines = [];
    lines.push(`§2玩家ID§r： §l§d${name}§r`);
    lines.push(`§2危险等级§r： ${lvlColor}等级 §l${level} §r${lvlColor}（${lvlDesc}）`);
    lines.push(`§2记录原因§r： §b${info}`);
    if (isPriv)
        lines.push(`§2违规服务器§r： §b${obj.server}`);
    lines.push(`§2XUID§r： §b${xuid}`);
    lines.push(`§2玩家QQ§r： §b${qq}`);
    if (isPriv && moreInfo)
        lines.push(`§2玩家电话§r： §b${obj.area_code} ${obj.phone}`);
    if (isPriv)
        lines.push(`§2记录时间§r： §b${obj.time}`);
    lines.push(`§2记录UUID§r： §b${uuid}`);
    lines.push(`§2来源库§r： §b${repoName} （${black_id}）`);
    return lines.join('\n');
}
function formatBlackBEKickMsg(info) {
    const obj = {};
    if (info) {
        const [lvlDesc, lvlColor] = formatBlackBELvl(info.level);
        Object.assign(obj, {
            UUID: info.uuid,
            NAME: info.name,
            BLACK_ID: info.black_id,
            XUID: info.xuid,
            INFO: info.info,
            LEVEL: info.level,
            LEVEL_DESC: lvlDesc,
            LEVEL_COLOR: lvlColor,
            QQ: info.qq,
        });
    }
    return formatVarString(config.kickByCloudMsg, obj);
}
function clearCache() {
    cachedPrivResp.length = 0;
}
setInterval(() => clearCache(), config.clearCacheInterval);

function delLocalListItem(obj) {
    const { list } = localList;
    const deleted = list.splice(list.indexOf(obj), 1);
    saveLocalList();
    return !!deleted.length;
}
async function localItemForm(player, obj, moreInfo = false) {
    const delItem = async () => {
        if (await sendModalFormAsync(player, PLUGIN_NAME, '§6你是否確定將該玩家於封禁名單中刪除?')) {
            player.tell(delLocalListItem(obj)
                ? '§a删除成功！'
                : '§c删除失敗！未找到該封禁項目');
        }
        else {
            player.tell('§6删除操作已取消');
        }
    };
    const editTime = async () => {
        const res = await new CustomFormEx(PLUGIN_NAME)
            .addSwitch('forever', '是否永久封禁', !obj.endTime)
            .addInput('time', '如果非永久封禁，請輸入所封禁之時間（單位:分鐘）')
            .sendAsync(player);
        if (res === FormClose) {
            player.tell('§6修改操作已取消');
            return;
        }
        const { forever, time } = res;
        const timeNum = Number(time);
        if ((!timeNum || timeNum <= 0) && !forever) {
            await sendModalFormAsync(player, PLUGIN_NAME, '§c請輸入正確的時間！', '§a知道了', '§a知道了');
            editTime();
            return;
        }
        obj.endTime = forever
            ? undefined
            : new Date(Date.now() + timeNum * 60 * 1000).toJSON();
        saveLocalList();
        player.tell('§a操作成功！');
    };
    const editDesc = async () => {
        const res = await new CustomFormEx(PLUGIN_NAME)
            .addInput('reason', '請輸入需修改的封禁原因', {
            placeholder: '如想清空封禁原因請留空',
            default: obj.reason,
        })
            .sendAsync(player);
        if (res === FormClose) {
            player.tell('§6修改操作已取消');
            return;
        }
        const reason = res.reason.trim();
        obj.reason = reason || undefined;
        saveLocalList();
        player.tell('§a操作成功！');
    };
    const form = setupFunctionalityForm([['返回', null]]);
    form.content = formatLocalInfo(obj, moreInfo);
    if (moreInfo)
        form.buttons.unshift(['删除項目', delItem], ['修改封禁時間', editTime], ['修改封禁原因', editDesc]);
    return processListFormReturn(await form.sendAsync(player));
}
async function blackBEItemForm(player, obj, moreInfo = false) {
    const form = setupFunctionalityForm([['返回', null]]);
    form.content = await formatBlackBEInfo(obj, moreInfo);
    return processListFormReturn(await form.sendAsync(player));
}
async function localListForm(player) {
    if (!localList.list.length) {
        player.tell(`§6封禁名單為空`);
        return;
    }
    const form = new SimpleFormEx(localList.list);
    form.title = PLUGIN_NAME;
    form.canTurnPage = true;
    form.canJumpPage = true;
    form.hasSearchButton = true;
    form.formatter = ({ name, xuid, endTime }) => [
        `§6${name ?? 'NaN'} §7(${xuid ?? 'NaN'})\n` +
            `§2${endTime ? `${formatDate({ date: new Date(endTime) })} 解封` : 'Forever'}`,
    ];
    form.searcher = (_, param) => queryLocal(param, true);
    const sendTask = async () => {
        const res = await form.sendAsync(player);
        if (res !== FormClose) {
            const infoRes = await localItemForm(player, res, true);
            if (infoRes === false)
                sendTask();
        }
    };
    sendTask();
}

async function queryBlackBE(param) {
    const tasks = [
        check({ name: param, qq: param, xuid: param, withToken: false }),
        config.apiToken
            ? checkPrivate({ name: param, qq: param, xuid: param })
            : Promise.resolve(),
    ];
    const [comm, priv] = await Promise.all(tasks);
    const commInfo = [];
    const privInfo = [];
    if (comm)
        commInfo.push(...comm.data.info);
    if (priv) {
        for (const repo of priv.data) {
            if (repo.exist)
                privInfo.push(...repo.info.map((v) => ({ ...v, black_id: repo.repo_uuid })));
        }
    }
    return [commInfo, privInfo];
}
function formatLocalItemShort(obj) {
    const { name, xuid, ips, clientIds } = obj;
    const items = [name, xuid, ...(ips ?? []), ...(clientIds ?? [])].filter((v) => v);
    const it1 = items.shift();
    return `§b${it1}${items.length ? ` §7(${items.join(', ')})` : ''}`;
}
const queryResultFormatter = ({ type, value, }) => {
    const { name, xuid } = value;
    let line1 = '';
    if (type === 'common')
        line1 = '§2BlackBE 公有库';
    else if (type === 'private')
        line1 = '§3BlackBE 私有库';
    else
        line1 = '§5本地库';
    const line2 = `§6${name ?? xuid ?? '未知'}`;
    if ('level' in value) {
        const { level } = value;
        const lvlColor = formatBlackBELvl(level)[1];
        line1 += `§7 | ${lvlColor}等级 ${level}`;
    }
    return [`${line1}\n${line2}`];
};
async function queryResultForm(player, param, moreInfo = false) {
    param = param?.trim();
    if (!param) {
        player.tell(`§c請輸入要查詢的内容`);
        return;
    }
    player.tell(`§a請稍等，正在為你查詢！`);
    const localRes = [];
    const blackBECommRes = [];
    const blackBEPrivRes = [];
    try {
        localRes.push(...queryLocal(param, moreInfo));
        if (!config.disableBlackBE) {
            const [comm, priv] = await queryBlackBE(param);
            blackBECommRes.push(...comm);
            blackBEPrivRes.push(...priv);
        }
    }
    catch (e) {
        player.tell(`§c出錯了！\n${String(e)}`);
    }
    const localNum = localRes.length;
    const privNum = blackBEPrivRes.length;
    const commNum = blackBECommRes.length;
    if (!localNum && !privNum && !commNum) {
        player.tell(`§6很抱歉，我们找遍了封禁名單${config.disableBlackBE ? '' : '和 BlackBE'}，` +
            `但是沒有任何結果`);
        return;
    }
    const headingSuffixes = [];
    if (localNum)
        headingSuffixes.push(`§l§e${localNum} §r§a個封禁數量`);
    if (commNum)
        headingSuffixes.push(`§l§e${commNum} §r§a条云黑公有库记录`);
    if (privNum)
        headingSuffixes.push(`§l§e${privNum} §r§a条云黑私有库记录`);
    if (headingSuffixes.length > 1)
        headingSuffixes.push(`和 ${headingSuffixes.pop()}`);
    const heading = `§a為你找到了關於 §l§2${param} §r§a的 ${headingSuffixes.join('， ')}`;
    const form = new SimpleFormEx([
        ...localRes.map((value) => ({ type: 'local', value })),
        ...blackBECommRes.map((value) => ({ type: 'common', value })),
        ...blackBEPrivRes.map((value) => ({ type: 'private', value })),
    ]);
    form.title = PLUGIN_NAME;
    form.canTurnPage = true;
    form.canJumpPage = true;
    form.content = `${heading}\n\n${form.content}`;
    form.formatter = queryResultFormatter;
    const sendTask = async () => {
        const res = await form.sendAsync(player);
        if (res !== FormClose) {
            const { type, value } = res;
            const infoRes = await (type === 'local'
                ? localItemForm(player, value, moreInfo)
                : blackBEItemForm(player, value, moreInfo));
            if (infoRes === false)
                sendTask();
        }
    };
    sendTask();
}
async function queryFormAsync(player, param) {
    const op = player.isOP();
    if (!param) {
        let form = new CustomFormEx(PLUGIN_NAME);
        form = form.addLabel(`§a請輸入要查詢的内容， 我們會在封禁名單${config.disableBlackBE ? '' : '与 BlackBE '}中查找结果`);
        if (!config.disableBlackBE) {
            form.addLabel('§6请谨慎使用 XUID 查询来自 BlackBE 的记录：\n' +
                '由于历史遗留和 XUID 采集本身存在难度， 导致大部分条目没有记录 XUID， ' +
                '所以不推荐完全依赖 XUID 来判断玩家是否存在于黑名单');
        }
        form = form.addInput('param', '', {
            placeholder: `輸入 玩家ID${config.disableBlackBE ? '' : ' / QQ号'} / XUID${op ? ' / IP地址 / 設備ID' : ''}`,
        });
        const res = await form.sendAsync(player);
        if (res === FormClose)
            return;
        ({ param } = res);
    }
    await queryResultForm(player, param, op);
}
function queryCmd(player, param) {
    queryFormAsync(player, param).catch(logErr);
}

const ONLY_OP_TEXT = '此命令僅限管理員使用';
const NO_CONSOLE_TEXT = '此命令不能於後台使用';
const REFUSE_LIST_QUERY_TEXT = '請到配置文件中查看封禁名單';
const NO_ENOUGH_ARG = '輸入之參數數量不足';
function checkCommandOp(player) {
    return !player || player.isOP();
}
function tell(msg, player) {
    if (player)
        player.tell(msg);
    else if (msg.startsWith('§c'))
        logger.error(delFormatCode(msg.replace('§c', '')));
    else
        logger.info(delFormatCode(msg));
}
function banCommand(willBan, time, reason, player) {
    if (time && time <= 0) {
        tell('§c封禁時間不能少於 0', player);
        return;
    }
    const willBanPlayer = mc.getPlayer(willBan);
    const isXuid = /^[0-9]{16}$/.test(willBan);
    const isIp = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/.test(willBan);
    const res = banPlayer(willBanPlayer
        ? { player: willBanPlayer }
        : {
            name: (isXuid ? data.xuid2name(willBan) : null) ?? willBan,
            xuid: isXuid ? willBan : data.name2xuid(willBan) ?? undefined,
            ip: isIp ? willBan : undefined,
        }, {
        time: time ? time * 60 * 1000 : undefined,
        reason,
    });
    if (!res)
        return;
    const { isModify, results } = res;
    if (results.length) {
        tell(`§a已成功${isModify ? '修改' : '增加'} §6${results.length} §a個項目§r\n` +
            `${results.map((v) => `- ${formatLocalItemShort(v)}§r`).join('\n')}`, player);
    }
    else {
        tell('§a執行成功，沒有項目被改變', player);
    }
}
async function banForm(player) {
    const players = getOnlineRealPlayers();
    const form = new CustomFormEx(PLUGIN_NAME)
        .addDropdown('playerDropdown', '如果你想要封禁的玩家在綫，請在此選擇', players.map((p) => p.realName))
        .addInput('playerInput', '如果玩家不在綫，請在此輸入他的Minecraft ID')
        .addInput('time', '請輸入封禁之時間，單位為分鐘 (如果值 為空 / 非數字 / 小於或等於 0，即代表永久)')
        .addInput('reason', '請輸入封禁原因（可選）');
    const res = await form.sendAsync(player);
    if (res === FormClose)
        return;
    const { playerDropdown, time } = res;
    const playerInput = res.playerInput.trim();
    const willBan = playerInput || (players ? players[playerDropdown].xuid : undefined);
    if (!willBan) {
        player.tell('§c要封禁的玩家無效');
        return;
    }
    const timeNum = Number(time) || undefined;
    const reason = res.reason.trim() || undefined;
    banCommand(willBan, timeNum, reason, player);
}
function unBanCommand(willUnBan, player) {
    const queried = queryLocal(willUnBan, true, true);
    if (!queried.length) {
        tell('§a執行成功，沒有項目變動', player);
        return;
    }
    const succ = [];
    for (const obj of queried) {
        if (delLocalListItem(obj))
            succ.push(obj);
    }
    tell(`§a已成功删除 §6${succ.length} §a個項目§r\n` +
        `${succ.map((v) => `- ${formatLocalItemShort(v)}§r`).join('\n')}`, player);
}
mc.listen('onServerStarted', () => {
    const cmdMain = mc.newCommand('ban', PLUGIN_NAME, PermType.Any);
    cmdMain.setEnum('enumReload', ['reload']);
    cmdMain.mandatory('enumReload', ParamType.Enum, 'enumReload', 1);
    cmdMain.overload(['enumReload']);
    cmdMain.setEnum('enumQuery', ['query']);
    cmdMain.mandatory('enumQuery', ParamType.Enum, 'enumQuery', 1);
    cmdMain.optional('queryString', ParamType.String);
    cmdMain.overload(['enumQuery', 'queryString']);
    cmdMain.setEnum('enumBan', ['ban']);
    cmdMain.mandatory('enumBan', ParamType.Enum, 'enumBan', 1);
    cmdMain.mandatory('player', ParamType.String);
    cmdMain.optional('reason', ParamType.String);
    cmdMain.optional('duration', ParamType.Int);
    cmdMain.overload(['enumBan', 'player', 'reason', 'duration']);
    cmdMain.overload(['enumBan']);
    cmdMain.setEnum('enumUnBan', ['unban']);
    cmdMain.mandatory('enumUnBan', ParamType.Enum, 'enumUnBan', 1);
    cmdMain.overload(['enumUnBan', 'player']);
    cmdMain.setEnum('enumLocal', ['local']);
    cmdMain.mandatory('enumLocal', ParamType.Enum, 'enumLocal', 1);
    cmdMain.overload(['enumLocal']);
    cmdMain.overload([]);
    cmdMain.setCallback((_, { player }, out, result) => {
        const { enumReload, enumQuery, queryString, enumBan, player: stringSelector, reason, duration, enumUnBan, enumLocal, } = result;
        if (enumReload) {
            if (!checkCommandOp(player)) {
                out.error(ONLY_OP_TEXT);
                return false;
            }
            try {
                reloadConfig();
            }
            catch (e) {
                out.error(`出错了！\n${String(e)}`);
                return false;
            }
            out.success(`§a成功重載配置文件與封禁名單！部分配置需要啟伺服器才可生效！`);
            return true;
        }
        if (enumQuery) {
            if (!player) {
                out.error(NO_CONSOLE_TEXT);
                out.error(REFUSE_LIST_QUERY_TEXT);
                return false;
            }
            if (config.onlyOpCanQuery && !player.isOP()) {
                out.error(ONLY_OP_TEXT);
                return false;
            }
            queryCmd(player, queryString);
            return true;
        }
        if (enumBan) {
            if (!checkCommandOp(player)) {
                out.error(ONLY_OP_TEXT);
                return false;
            }
            if (player && !stringSelector) {
                banForm(player).catch(logErr);
                return true;
            }
            if (stringSelector) {
                banCommand(stringSelector, duration, reason, player);
                return true;
            }
            out.error(NO_ENOUGH_ARG);
            return false;
        }
        if (enumUnBan) {
            if (!checkCommandOp(player)) {
                out.error(ONLY_OP_TEXT);
                return false;
            }
            if (stringSelector) {
                unBanCommand(stringSelector, player);
                return true;
            }
            return false;
        }
        if (enumLocal) {
            if (!player) {
                out.error(NO_CONSOLE_TEXT);
                out.error(REFUSE_LIST_QUERY_TEXT);
                return false;
            }
            if (!player.isOP()) {
                out.error(ONLY_OP_TEXT);
                return false;
            }
            localListForm(player).catch(logErr);
            return true;
        }
        out.error(`請雖然子命令`);
        return false;
    });
    cmdMain.setup();
    if (config.registerBanCommand) {
        const cmdBan = mc.newCommand('ban', `${PLUGIN_NAME} - 封禁玩家`, PermType.GameMasters);
        cmdBan.mandatory('player', ParamType.String);
        cmdBan.optional('reason', ParamType.String);
        cmdBan.optional('duration', ParamType.Int);
        cmdBan.overload(['player', 'reason', 'duration']);
        cmdBan.setCallback((_, { player }, __, { player: stringSelector, reason, duration, }) => {
            banCommand(stringSelector, duration, reason, player);
            return true;
        });
        cmdBan.setup();
        const cmdUnBan = mc.newCommand('unban', `${PLUGIN_NAME} - 解封玩家`, PermType.GameMasters);
        cmdUnBan.mandatory('player', ParamType.String);
        cmdUnBan.overload(['player']);
        cmdUnBan.setCallback((_, { player }, __, { player: stringSelector, }) => {
            unBanCommand(stringSelector, player);
            return true;
        });
        cmdUnBan.setup();
    }
});

const listenerType = (config.processOnPreJoin
    ? 'onPreJoin'
    : 'onJoin');
mc.listen(listenerType, wrapAsyncFunc(async (player) => {
    if (player.isSimulatedPlayer())
        return;
    const { hidePassMessage, banIp, banDevice } = config;
    const { realName, xuid } = player;
    const { ip, clientId } = player.getDevice();
    const stripedIp = stripIp(ip);
    if (!hidePassMessage)
        logger.info(`正在查詢 ${realName} 的封禁記錄……`);
    try {
        for (const it of localList.list) {
            if (realName === it.name ||
                xuid === it.xuid ||
                (banIp && it.ips && it.ips.includes(stripedIp)) ||
                (banDevice && it.clientIds && it.clientIds.includes(clientId))) {
                banPlayer({ player }, { kickTip: formatLocalKickMsg(it) });
                logger.warn(`查詢到玩家 ${realName} 存在於封禁名單，玩家已被踢出`);
                var op = mc.getOnlinePlayers();
                for (let index = 0; index < op.length; index++) {
                    if (op[index].isOP()) {
                        op[index].tell(`§d[§bBan§d]§e${realName}:在進入游戲時被檢測到於封禁名單之中，已被踢出伺服器`, 0);
                    }
                }
                return;
            }
        }
    }
    catch (e) {
        logger.error(`查詢玩家 ${realName} 的封禁名單記錄出错！\n${formatError(e)}`);
        return;
    }
    if (!hidePassMessage)
        logger.info(`沒有查询到玩家 ${realName} 的封禁名單記錄`);
    if (config.pardonBlackBE.includes(realName) ||
        config.pardonBlackBE.includes(xuid)) {
        if (!hidePassMessage)
            logger.info(`玩家 ${realName} 的違規記錄被通過`);
        return;
    }
    if (!hidePassMessage)
        logger.info(`正在查詢玩家${realName} 的違規記錄……`);
    try {
        const { data } = await check({ name: realName, xuid });
        const { exist, info } = data;
        if (exist) {
            banPlayer({ player }, { kickTip: formatBlackBEKickMsg(info[0]) });
            const formattedInfo = `§6查詢到玩家 §d${realName} §6存在違規記錄！\n` +
                `§c玩家已被封禁！§r\n` +
                `${await formatBlackBEInfo(info[0])}`;
            mc.broadcast(formattedInfo);
            logger.warn(delFormatCode(formattedInfo));
            var op = mc.getOnlinePlayers();
            for (let index = 0; index < op.length; index++) {
                if (op[index].isOP()) {
                    op[index].tell(`§d[§bBan§d]§e${realName}:在進入游戲時被檢測到於封禁名單之中，已被踢出伺服器`, 0);
                }
            }
            return;
        }
    }
    catch (e) {
        logger.error(`查詢玩家 ${realName} 的記錄出錯！\n${formatError(e)}`);
        return;
    }
    if (!hidePassMessage)
        logger.info(`沒有查詢到 ${realName} 的違規記錄`);
}));
setInterval(() => {
    const { list } = localList;
    const originalLen = list.length;
    let offset = 0;
    for (let i = 0; i < originalLen; i += 1) {
        const realI = i - offset;
        const it = list[realI];
        const { endTime } = it;
        const nowTime = Date.now();
        if (endTime && nowTime >= new Date(endTime).getTime()) {
            list.splice(realI, 1);
            offset += 1;
            saveLocalList();
            const formatted = delFormatCode(formatLocalItemShort(it));
            logger.warn(`玩家 ${formatted} 的封禁時間已到。已解封`);
        }
    }
}, config.checkLocalListInterval);

ll.registerPlugin(PLUGIN_NAME, PLUGIN_DESCRIPTION, PLUGIN_VERSION, PLUGIN_EXTRA);

log('Ban插件已加載')