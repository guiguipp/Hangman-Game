// Header
function setupTypewriter(t) {
    var HTML = t.innerHTML;

    t.innerHTML = "";

    var cursorPosition = 0,
        tag = "",
        writingTag = false,
        tagOpen = false,
        typeSpeed = 100,
    tempTypeSpeed = 0;

    var type = function() {
    
        if (writingTag === true) {
            tag += HTML[cursorPosition];
        }

        if (HTML[cursorPosition] === "<") {
            tempTypeSpeed = 0;
            if (tagOpen) {
                tagOpen = false;
                writingTag = true;
            } else {
                tag = "";
                tagOpen = true;
                writingTag = true;
                tag += HTML[cursorPosition];
            }
        }
        if (!writingTag && tagOpen) {
            tag.innerHTML += HTML[cursorPosition];
        }
        if (!writingTag && !tagOpen) {
            if (HTML[cursorPosition] === " ") {
                tempTypeSpeed = 0;
            }
            else {
                tempTypeSpeed = (Math.random() * typeSpeed) + 50;
            }
            t.innerHTML += HTML[cursorPosition];
        }
        if (writingTag === true && HTML[cursorPosition] === ">") {
            tempTypeSpeed = (Math.random() * typeSpeed) + 50;
            writingTag = false;
            if (tagOpen) {
                var newSpan = document.createElement("span");
                t.appendChild(newSpan);
                newSpan.innerHTML = tag;
                tag = newSpan.firstChild;
            }
        }

        cursorPosition += 1;
        if (cursorPosition < HTML.length - 1) {
            setTimeout(type, tempTypeSpeed);
        }

    };

    return {
        type: type
    };
}

var typer = document.getElementById('typewriter');
typewriter = setupTypewriter(typewriter);
typewriter.type();

// HTML Attributes Database 
const a = {name: "a", type: "HTML", example: "a", definition: "Defines a hyperlink", url: "a href=\"https://www.w3schools.com/tags/tag_a.asp\""};
const abbr = {name: "abbr", type: "HTML", example: "abbr", definition: "Defines an abbreviation or an acronym", url: "a href=\"https://www.w3schools.com/tags/tag_abbr.asp\""};
const address = {name: "address", type: "HTML", example: "address", definition: "Defines contact information for the author/owner of a document", url: "a href=\"https://www.w3schools.com/tags/tag_address.asp\""};
const area = {name: "area", type: "HTML", example: "area", definition: "Defines an area inside an image-map", url: "a href=\"https://www.w3schools.com/tags/tag_area.asp\""};
const article = {name: "article", type: "HTML", example: "article", definition: "Defines an article", url: "a href=\"https://www.w3schools.com/tags/tag_article.asp\""};
const aside = {name: "aside", type: "HTML", example: "aside", definition: "Defines content aside from the page content", url: "a href=\"https://www.w3schools.com/tags/tag_aside.asp\""};
const audio = {name: "audio", type: "HTML", example: "audio", definition: "Defines sound content", url: "a href=\"https://www.w3schools.com/tags/tag_audio.asp\""};
const b = {name: "b", type: "HTML", example: "b", definition: "Defines bold text", url: "a href=\"https://www.w3schools.com/tags/tag_b.asp\""};
const base = {name: "base", type: "HTML", example: "base", definition: "Specifies the base URL/target for all relative URLs in a document", url: "a href=\"https://www.w3schools.com/tags/tag_base.asp\""};
const bdi = {name: "bdi", type: "HTML", example: "bdi", definition: "Isolates a part of text that might be formatted in a different direction from other text outside it", url: "a href=\"https://www.w3schools.com/tags/tag_bdi.asp\""};
const bdo = {name: "bdo", type: "HTML", example: "bdo", definition: "Overrides the current text direction", url: "a href=\"https://www.w3schools.com/tags/tag_bdo.asp\""};
const blockquote = {name: "blockquote", type: "HTML", example: "blockquote", definition: "Defines a section that is quoted from another source", url: "a href=\"https://www.w3schools.com/tags/tag_blockquote.asp\""};
const body = {name: "body", type: "HTML", example: "body", definition: "Defines the document's body", url: "a href=\"https://www.w3schools.com/tags/tag_body.asp\""};
const br = {name: "br", type: "HTML", example: "br", definition: "Defines a single line break", url: "a href=\"https://www.w3schools.com/tags/tag_br.asp\""};
const button = {name: "button", type: "HTML", example: "button", definition: "Defines a clickable button", url: "a href=\"https://www.w3schools.com/tags/tag_button.asp\""};
const canvas = {name: "canvas", type: "HTML", example: "canvas", definition: "Used to draw graphics, on the fly, via scripting (usually JavaScript)", url: "a href=\"https://www.w3schools.com/tags/tag_canvas.asp\""};
const caption = {name: "caption", type: "HTML", example: "caption", definition: "Defines a table caption", url: "a href=\"https://www.w3schools.com/tags/tag_caption.asp\""};
const cite = {name: "cite", type: "HTML", example: "cite", definition: "Defines the title of a work", url: "a href=\"https://www.w3schools.com/tags/tag_cite.asp\""};
const code = {name: "code", type: "HTML", example: "code", definition: "Defines a piece of computer code", url: "a href=\"https://www.w3schools.com/tags/tag_code.asp\""};
const col = {name: "col", type: "HTML", example: "col", definition: "Specifies column properties for each column within a colgroup element", url: "a href=\"https://www.w3schools.com/tags/tag_col.asp\""};
const colgroup = {name: "colgroup", type: "HTML", example: "colgroup", definition: "Specifies a group of one or more columns in a table for formatting", url: "a href=\"https://www.w3schools.com/tags/tag_colgroup.asp\""};
const datalist = {name: "datalist", type: "HTML", example: "datalist", definition: "Specifies a list of pre-defined options for input controls", url: "a href=\"https://www.w3schools.com/tags/tag_datalist.asp\""};
const dd = {name: "dd", type: "HTML", example: "dd", definition: "Defines a description/value of a term in a description list", url: "a href=\"https://www.w3schools.com/tags/tag_dd.asp\""};
const del = {name: "del", type: "HTML", example: "del", definition: "Defines text that has been deleted from a document", url: "a href=\"https://www.w3schools.com/tags/tag_del.asp\""};
const details = {name: "details", type: "HTML", example: "details", definition: "Defines additional details that the user can view or hide", url: "a href=\"https://www.w3schools.com/tags/tag_details.asp\""};
const dfn = {name: "dfn", type: "HTML", example: "dfn", definition: "Represents the defining instance of a term", url: "a href=\"https://www.w3schools.com/tags/tag_dfn.asp\""};
const dialog = {name: "dialog", type: "HTML", example: "dialog", definition: "Defines a dialog box or window", url: "a href=\"https://www.w3schools.com/tags/tag_dialog.asp\""};
const div = {name: "div", type: "HTML", example: "div", definition: "Defines a section in a document", url: "a href=\"https://www.w3schools.com/tags/tag_div.asp\""};
const dl = {name: "dl", type: "HTML", example: "dl", definition: "Defines a description list", url: "a href=\"https://www.w3schools.com/tags/tag_dl.asp\""};
const dt = {name: "dt", type: "HTML", example: "dt", definition: "Defines a term/name in a description list", url: "a href=\"https://www.w3schools.com/tags/tag_dt.asp\""};
const em = {name: "em", type: "HTML", example: "em", definition: "Defines emphasized text", url: "a href=\"https://www.w3schools.com/tags/tag_em.asp\""};
const embed = {name: "embed", type: "HTML", example: "embed", definition: "Defines a container for an external (non-HTML) application", url: "a href=\"https://www.w3schools.com/tags/tag_embed.asp\""};
const fieldset = {name: "fieldset", type: "HTML", example: "fieldset", definition: "Groups related elements in a form", url: "a href=\"https://www.w3schools.com/tags/tag_fieldset.asp\""};
const figcaption = {name: "figcaption", type: "HTML", example: "figcaption", definition: "Defines a caption for a figure element", url: "a href=\"https://www.w3schools.com/tags/tag_figcaption.asp\""};
const figure = {name: "figure", type: "HTML", example: "figure", definition: "Specifies self-contained content", url: "a href=\"https://www.w3schools.com/tags/tag_figure.asp\""};
const footer = {name: "footer", type: "HTML", example: "footer", definition: "Defines a footer for a document or section", url: "a href=\"https://www.w3schools.com/tags/tag_footer.asp\""};
const form = {name: "form", type: "HTML", example: "form", definition: "Defines an HTML form for user input", url: "a href=\"https://www.w3schools.com/tags/tag_form.asp\""};
const head = {name: "head", type: "HTML", example: "head", definition: "Defines information about the document", url: "a href=\"https://www.w3schools.com/tags/tag_head.asp\""};
const header = {name: "header", type: "HTML", example: "header", definition: "Defines a header for a document or section", url: "a href=\"https://www.w3schools.com/tags/tag_header.asp\""};
const hr = {name: "hr", type: "HTML", example: "hr", definition: "Defines a thematic change in the content", url: "a href=\"https://www.w3schools.com/tags/tag_hr.asp\""};
const html = {name: "html", type: "HTML", example: "html", definition: "Defines the root of an HTML document", url: "a href=\"https://www.w3schools.com/tags/tag_html.asp\""};
const i = {name: "i", type: "HTML", example: "i", definition: "Defines a part of text in an alternate voice or mood", url: "a href=\"https://www.w3schools.com/tags/tag_i.asp\""};
const iframe = {name: "iframe", type: "HTML", example: "iframe", definition: "Defines an inline frame", url: "a href=\"https://www.w3schools.com/tags/tag_iframe.asp\""};
const img = {name: "img", type: "HTML", example: "img", definition: "Defines an image", url: "a href=\"https://www.w3schools.com/tags/tag_img.asp\""};
const input = {name: "input", type: "HTML", example: "input", definition: "Defines an input control", url: "a href=\"https://www.w3schools.com/tags/tag_input.asp\""};
const ins = {name: "ins", type: "HTML", example: "ins", definition: "Defines a text that has been inserted into a document", url: "a href=\"https://www.w3schools.com/tags/tag_ins.asp\""};
const kbd = {name: "kbd", type: "HTML", example: "kbd", definition: "Defines keyboard input", url: "a href=\"https://www.w3schools.com/tags/tag_kbd.asp\""};
const label = {name: "label", type: "HTML", example: "label", definition: "Defines a label for an input element", url: "a href=\"https://www.w3schools.com/tags/tag_label.asp\""};
const legend = {name: "legend", type: "HTML", example: "legend", definition: "Defines a caption for a fieldset element", url: "a href=\"https://www.w3schools.com/tags/tag_legend.asp\""};
const li = {name: "li", type: "HTML", example: "li", definition: "Defines a list item", url: "a href=\"https://www.w3schools.com/tags/tag_li.asp\""};
const link = {name: "link", type: "HTML", example: "link", definition: "Defines the relationship between a document and an external resource (most used to link to style sheets)", url: "a href=\"https://www.w3schools.com/tags/tag_link.asp\""};
const main = {name: "main", type: "HTML", example: "main", definition: "Specifies the main content of a document", url: "a href=\"https://www.w3schools.com/tags/tag_main.asp\""};
const map = {name: "map", type: "HTML", example: "map", definition: "Defines a client-side image-map", url: "a href=\"https://www.w3schools.com/tags/tag_map.asp\""};
const mark = {name: "mark", type: "HTML", example: "mark", definition: "Defines marked/highlighted text", url: "a href=\"https://www.w3schools.com/tags/tag_mark.asp\""};
const menu = {name: "menu", type: "HTML", example: "menu", definition: "Defines a list/menu of commands", url: "a href=\"https://www.w3schools.com/tags/tag_menu.asp\""};
const menuitem = {name: "menuitem", type: "HTML", example: "menuitem", definition: "Defines a command/menu item that the user can invoke from a popup menu", url: "a href=\"https://www.w3schools.com/tags/tag_menuitem.asp\""};
const meta = {name: "meta", type: "HTML", example: "meta", definition: "Defines metadata about an HTML document", url: "a href=\"https://www.w3schools.com/tags/tag_meta.asp\""};
const meter = {name: "meter", type: "HTML", example: "meter", definition: "Defines a scalar measurement within a known range (a gauge)", url: "a href=\"https://www.w3schools.com/tags/tag_meter.asp\""};
const nav = {name: "nav", type: "HTML", example: "nav", definition: "Defines navigation links", url: "a href=\"https://www.w3schools.com/tags/tag_nav.asp\""};
const noscript = {name: "noscript", type: "HTML", example: "noscript", definition: "Defines an alternate content for users that do not support client-side scripts", url: "a href=\"https://www.w3schools.com/tags/tag_noscript.asp\""};
const object = {name: "object", type: "HTML", example: "object", definition: "Defines an embedded object", url: "a href=\"https://www.w3schools.com/tags/tag_object.asp\""};
const ol = {name: "ol", type: "HTML", example: "ol", definition: "Defines an ordered list", url: "a href=\"https://www.w3schools.com/tags/tag_ol.asp\""};
const optgroup = {name: "optgroup", type: "HTML", example: "optgroup", definition: "Defines a group of related options in a drop-down list", url: "a href=\"https://www.w3schools.com/tags/tag_optgroup.asp\""};
const option = {name: "option", type: "HTML", example: "option", definition: "Defines an option in a drop-down list", url: "a href=\"https://www.w3schools.com/tags/tag_option.asp\""};
const output = {name: "output", type: "HTML", example: "output", definition: "Defines the result of a calculation", url: "a href=\"https://www.w3schools.com/tags/tag_output.asp\""};
const p = {name: "p", type: "HTML", example: "p", definition: "Defines a paragraph", url: "a href=\"https://www.w3schools.com/tags/tag_p.asp\""};
const param = {name: "param", type: "HTML", example: "param", definition: "Defines a parameter for an object", url: "a href=\"https://www.w3schools.com/tags/tag_param.asp\""};
const picture = {name: "picture", type: "HTML", example: "picture", definition: "Defines a container for multiple image resources", url: "a href=\"https://www.w3schools.com/tags/tag_picture.asp\""};
const pre = {name: "pre", type: "HTML", example: "pre", definition: "Defines preformatted text", url: "a href=\"https://www.w3schools.com/tags/tag_pre.asp\""};
const progress = {name: "progress", type: "HTML", example: "progress", definition: "Represents the progress of a task", url: "a href=\"https://www.w3schools.com/tags/tag_progress.asp\""};
const q = {name: "q", type: "HTML", example: "q", definition: "Defines a short quotation", url: "a href=\"https://www.w3schools.com/tags/tag_q.asp\""};
const rp = {name: "rp", type: "HTML", example: "rp", definition: "Defines what to show in browsers that do not support ruby annotations", url: "a href=\"https://www.w3schools.com/tags/tag_rp.asp\""};
const rt = {name: "rt", type: "HTML", example: "rt", definition: "Defines an explanation/pronunciation of characters (for East Asian typography)", url: "a href=\"https://www.w3schools.com/tags/tag_rt.asp\""};
const ruby = {name: "ruby", type: "HTML", example: "ruby", definition: "Defines a ruby annotation (for East Asian typography)", url: "a href=\"https://www.w3schools.com/tags/tag_ruby.asp\""};
const s = {name: "s", type: "HTML", example: "s", definition: "Defines text that is no longer correct", url: "a href=\"https://www.w3schools.com/tags/tag_s.asp\""};
const samp = {name: "samp", type: "HTML", example: "samp", definition: "Defines sample output from a computer program", url: "a href=\"https://www.w3schools.com/tags/tag_samp.asp\""};
const script = {name: "script", type: "HTML", example: "script", definition: "Defines a client-side script", url: "a href=\"https://www.w3schools.com/tags/tag_script.asp\""};
const section = {name: "section", type: "HTML", example: "section", definition: "Defines a section in a document", url: "a href=\"https://www.w3schools.com/tags/tag_section.asp\""};
const select = {name: "select", type: "HTML", example: "select", definition: "Defines a drop-down list", url: "a href=\"https://www.w3schools.com/tags/tag_select.asp\""};
const small = {name: "small", type: "HTML", example: "small", definition: "Defines smaller text", url: "a href=\"https://www.w3schools.com/tags/tag_small.asp\""};
const source = {name: "source", type: "HTML", example: "source", definition: "Defines multiple media resources for media elements (video and audio)", url: "a href=\"https://www.w3schools.com/tags/tag_source.asp\""};
const span = {name: "span", type: "HTML", example: "span", definition: "Defines a section in a document", url: "a href=\"https://www.w3schools.com/tags/tag_span.asp\""};
const strong = {name: "strong", type: "HTML", example: "strong", definition: "Defines important text", url: "a href=\"https://www.w3schools.com/tags/tag_strong.asp\""};
const style = {name: "style", type: "HTML", example: "style", definition: "Defines style information for a document", url: "a href=\"https://www.w3schools.com/tags/tag_style.asp\""};
const sub = {name: "sub", type: "HTML", example: "sub", definition: "Defines subscripted text", url: "a href=\"https://www.w3schools.com/tags/tag_sub.asp\""};
const summary = {name: "summary", type: "HTML", example: "summary", definition: "Defines a visible heading for a details element", url: "a href=\"https://www.w3schools.com/tags/tag_summary.asp\""};
const sup = {name: "sup", type: "HTML", example: "sup", definition: "Defines superscripted text", url: "a href=\"https://www.w3schools.com/tags/tag_sup.asp\""};
const table = {name: "table", type: "HTML", example: "table", definition: "Defines a table", url: "a href=\"https://www.w3schools.com/tags/tag_table.asp\""};
const tbody = {name: "tbody", type: "HTML", example: "tbody", definition: "Groups the body content in a table", url: "a href=\"https://www.w3schools.com/tags/tag_tbody.asp\""};
const td = {name: "td", type: "HTML", example: "td", definition: "Defines a cell in a table", url: "a href=\"https://www.w3schools.com/tags/tag_td.asp\""};
const template = {name: "template", type: "HTML", example: "template", definition: "Defines a template", url: "a href=\"https://www.w3schools.com/tags/tag_template.asp\""};
const textarea = {name: "textarea", type: "HTML", example: "textarea", definition: "Defines a multiline input control (text area)", url: "a href=\"https://www.w3schools.com/tags/tag_textarea.asp\""};
const tfoot = {name: "tfoot", type: "HTML", example: "tfoot", definition: "Groups the footer content in a table", url: "a href=\"https://www.w3schools.com/tags/tag_tfoot.asp\""};
const th = {name: "th", type: "HTML", example: "th", definition: "Defines a header cell in a table", url: "a href=\"https://www.w3schools.com/tags/tag_th.asp\""};
const thead = {name: "thead", type: "HTML", example: "thead", definition: "Groups the header content in a table", url: "a href=\"https://www.w3schools.com/tags/tag_thead.asp\""};
const time = {name: "time", type: "HTML", example: "time", definition: "Defines a date/time", url: "a href=\"https://www.w3schools.com/tags/tag_time.asp\""};
const title = {name: "title", type: "HTML", example: "title", definition: "Defines a title for the document", url: "a href=\"https://www.w3schools.com/tags/tag_title.asp\""};
const tr = {name: "tr", type: "HTML", example: "tr", definition: "Defines a row in a table", url: "a href=\"https://www.w3schools.com/tags/tag_tr.asp\""};
const track = {name: "track", type: "HTML", example: "track", definition: "Defines text tracks for media elements (video and audio)", url: "a href=\"https://www.w3schools.com/tags/tag_track.asp\""};
const u = {name: "u", type: "HTML", example: "u", definition: "Defines text that should be stylistically different from normal text", url: "a href=\"https://www.w3schools.com/tags/tag_u.asp\""};
const ul = {name: "ul", type: "HTML", example: "ul", definition: "Defines an unordered list", url: "a href=\"https://www.w3schools.com/tags/tag_ul.asp\""};
// const var = {name: "var", type: "HTML", example: "var", definition: "Defines a variable", url: "a href=\"https://www.w3schools.com/tags/tag_var.asp\""};
const video = {name: "video", type: "HTML", example: "video", definition: "Defines a video or movie", url: "a href=\"https://www.w3schools.com/tags/tag_video.asp\""};
const wbr = {name: "wbr", type: "HTML", example: "wbr", definition: "Defines a possible line-break", url: "a href=\"https://www.w3schools.com/tags/tag_wbr.asp\""};

// CSS Property Database
const cssCharset = {name: "@charset", type: "CSS", example: "N/A", definition: "Specifies the character encoding used in the style sheet", url: "a href=\"https://www.w3schools.com/cssref/pr_charset_rule.asp\""};
const cssFontface = {name: "@font-face", type: "CSS", example: "N/A", definition: "A rule that allows websites to download and use fonts other than the 'web-safe' fonts", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_font-face_rule.asp\""};
const cssFontfeaturevalues = {name: "@font-feature-values", type: "CSS", example: "N/A", definition: "Allows authors to use a common name in font-variant-alternate for feature activated differently in OpenType", url: "no link, sorry..."};
const cssImport = {name: "@import", type: "CSS", example: "N/A", definition: "Allows you to import a style sheet into another style sheet", url: "a href=\"https://www.w3schools.com/cssref/pr_import_rule.asp\""};
const cssKeyframes = {name: "@keyframes", type: "CSS", example: "N/A", definition: "Specifies the animation code", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp\""};
const cssMedia = {name: "@media", type: "CSS", example: "N/A", definition: "Sets the style rules for different media types/devices/sizes", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_mediaquery.asp\""};
const cssAligncontent = {name: "align-content", type: "CSS", example: "N/A", definition: "Specifies the alignment between the lines inside a flexible container when the items do not use all available space", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_align-content.asp\""};
const cssAlignitems = {name: "align-items", type: "CSS", example: "N/A", definition: "Specifies the alignment for items inside a flexible container", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_align-items.asp\""};
const cssAlignself = {name: "align-self", type: "CSS", example: "N/A", definition: "Specifies the alignment for selected items inside a flexible container", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_align-self.asp\""};
const cssAll = {name: "all", type: "CSS", example: "N/A", definition: "Resets all properties (except unicode-bidi and direction)", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_all.asp\""};
const cssAnimation = {name: "animation", type: "CSS", example: "N/A", definition: "A shorthand property for all the animation properties", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_animation.asp\""};
const cssAnimationdelay = {name: "animation-delay", type: "CSS", example: "N/A", definition: "Specifies a delay for the start of an animation", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_animation-delay.asp\""};
const cssAnimationdirection = {name: "animation-direction", type: "CSS", example: "N/A", definition: "Specifies whether an animation should be played forwards, backwards or in alternate cycles", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_animation-direction.asp\""};
const cssAnimationduration = {name: "animation-duration", type: "CSS", example: "N/A", definition: "Specifies how long an animation should take to complete one cycle", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_animation-duration.asp\""};
const cssAnimationfillmode = {name: "animation-fill-mode", type: "CSS", example: "N/A", definition: "Specifies a style for the element when the animation is not playing (before it starts, after it ends, or both)", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_animation-fill-mode.asp\""};
const cssAnimationiterationcount = {name: "animation-iteration-count", type: "CSS", example: "N/A", definition: "Specifies the number of times an animation should be played", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_animation-iteration-count.asp\""};
const cssAnimationname = {name: "animation-name", type: "CSS", example: "N/A", definition: "Specifies a name for the @keyframes animation", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_animation-name.asp\""};
const cssAnimationplaystate = {name: "animation-play-state", type: "CSS", example: "N/A", definition: "Specifies whether the animation is running or paused", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_animation-play-state.asp\""};
const cssAnimationtimingfunction = {name: "animation-timing-function", type: "CSS", example: "N/A", definition: "Specifies the speed curve of an animation", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_animation-timing-function.asp\""};
const cssBackfacevisibility = {name: "backface-visibility", type: "CSS", example: "N/A", definition: "Defines whether or not the back face of an element should be visible when facing the user", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_backface-visibility.asp\""};
const cssBackground = {name: "background", type: "CSS", example: "N/A", definition: "A shorthand property for setting all the background properties in one declaration", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_background.asp\""};
const cssBackgroundattachment = {name: "background-attachment", type: "CSS", example: "N/A", definition: "Sets whether a background image scrolls with the rest of the page, or is fixed", url: "a href=\"https://www.w3schools.com/cssref/pr_background-attachment.asp\""};
const cssBackgroundblendmode = {name: "background-blend-mode", type: "CSS", example: "N/A", definition: "Specifies the blending mode of each background layer (color/image)", url: "a href=\"https://www.w3schools.com/cssref/pr_background-blend-mode.asp\""};
const cssBackgroundclip = {name: "background-clip", type: "CSS", example: "N/A", definition: "Defines how far the background (color or image) should extend within an element", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_background-clip.asp\""};
const cssBackgroundcolor = {name: "background-color", type: "CSS", example: "N/A", definition: "Specifies the background color of an element", url: "a href=\"https://www.w3schools.com/cssref/pr_background-color.asp\""};
const cssBackgroundimage = {name: "background-image", type: "CSS", example: "N/A", definition: "Specifies one or more background images for an element", url: "a href=\"https://www.w3schools.com/cssref/pr_background-image.asp\""};
const cssBackgroundorigin = {name: "background-origin", type: "CSS", example: "N/A", definition: "Specifies the origin position of a background image", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_background-origin.asp\""};
const cssBackgroundposition = {name: "background-position", type: "CSS", example: "N/A", definition: "Specifies the position of a background image", url: "a href=\"https://www.w3schools.com/cssref/pr_background-position.asp\""};
const cssBackgroundrepeat = {name: "background-repeat", type: "CSS", example: "N/A", definition: "Sets if/how a background image will be repeated", url: "a href=\"https://www.w3schools.com/cssref/pr_background-repeat.asp\""};
const cssBackgroundsize = {name: "background-size", type: "CSS", example: "N/A", definition: "Specifies the size of the background images", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_background-size.asp\""};
const cssBorder = {name: "border", type: "CSS", example: "N/A", definition: "A shorthand property for border-width, border-style and border-color", url: "a href=\"https://www.w3schools.com/cssref/pr_border.asp\""};
const cssBorderbottom = {name: "border-bottom", type: "CSS", example: "N/A", definition: "A shorthand property for setting all the bottom border properties in one declaration", url: "a href=\"https://www.w3schools.com/cssref/pr_border-bottom.asp\""};
const cssBorderbottomcolor = {name: "border-bottom-color", type: "CSS", example: "N/A", definition: "Sets the color of the bottom border", url: "a href=\"https://www.w3schools.com/cssref/pr_border-bottom_color.asp\""};
const cssBorderbottomleftradius = {name: "border-bottom-left-radius", type: "CSS", example: "N/A", definition: "Defines the radius of the border of the bottom-left corner", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_border-bottom-left-radius.asp\""};
const cssBorderbottomrightradius = {name: "border-bottom-right-radius", type: "CSS", example: "N/A", definition: "Defines the radius of the border of the bottom-right corner", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_border-bottom-right-radius.asp\""};
const cssBorderbottomstyle = {name: "border-bottom-style", type: "CSS", example: "N/A", definition: "Sets the style of the bottom border", url: "a href=\"https://www.w3schools.com/cssref/pr_border-bottom_style.asp\""};
const cssBorderbottomwidth = {name: "border-bottom-width", type: "CSS", example: "N/A", definition: "Sets the width of the bottom border", url: "a href=\"https://www.w3schools.com/cssref/pr_border-bottom_width.asp\""};
const cssBordercollapse = {name: "border-collapse", type: "CSS", example: "N/A", definition: "Sets whether table borders should collapse into a single border or be separated", url: "a href=\"https://www.w3schools.com/cssref/pr_border-collapse.asp\""};
const cssBordercolor = {name: "border-color", type: "CSS", example: "N/A", definition: "Sets the color of the four borders", url: "a href=\"https://www.w3schools.com/cssref/pr_border-color.asp\""};
const cssBorderimage = {name: "border-image", type: "CSS", example: "N/A", definition: "A shorthand property for setting all the border-image-* properties", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_border-image.asp\""};
const cssBorderimageoutset = {name: "border-image-outset", type: "CSS", example: "N/A", definition: "Specifies the amount by which the border image area extends beyond the border box", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_border-image-outset.asp\""};
const cssBorderimagerepeat = {name: "border-image-repeat", type: "CSS", example: "N/A", definition: "Specifies whether the border image should be repeated, rounded or stretched", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_border-image-repeat.asp\""};
const cssBorderimageslice = {name: "border-image-slice", type: "CSS", example: "N/A", definition: "Specifies how to slice the border image", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_border-image-slice.asp\""};
const cssBorderimagesource = {name: "border-image-source", type: "CSS", example: "N/A", definition: "Specifies the path to the image to be used as a border", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_border-image-source.asp\""};
const cssBorderimagewidth = {name: "border-image-width", type: "CSS", example: "N/A", definition: "Specifies the width of the border image", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_border-image-width.asp\""};
const cssBorderleft = {name: "border-left", type: "CSS", example: "N/A", definition: "A shorthand property for setting all the left border properties in one declaration", url: "a href=\"https://www.w3schools.com/cssref/pr_border-left.asp\""};
const cssBorderleftcolor = {name: "border-left-color", type: "CSS", example: "N/A", definition: "Sets the color of the left border", url: "a href=\"https://www.w3schools.com/cssref/pr_border-left_color.asp\""};
const cssBorderleftstyle = {name: "border-left-style", type: "CSS", example: "N/A", definition: "Sets the style of the left border", url: "a href=\"https://www.w3schools.com/cssref/pr_border-left_style.asp\""};
const cssBorderleftwidth = {name: "border-left-width", type: "CSS", example: "N/A", definition: "Sets the width of the left border", url: "a href=\"https://www.w3schools.com/cssref/pr_border-left_width.asp\""};
const cssBorderradius = {name: "border-radius", type: "CSS", example: "N/A", definition: "A shorthand property for setting all the four border-*-radius properties", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_border-radius.asp\""};
const cssBorderright = {name: "border-right", type: "CSS", example: "N/A", definition: "A shorthand property for setting all the right border properties in one declaration", url: "a href=\"https://www.w3schools.com/cssref/pr_border-right.asp\""};
const cssBorderrightcolor = {name: "border-right-color", type: "CSS", example: "N/A", definition: "Sets the color of the right border", url: "a href=\"https://www.w3schools.com/cssref/pr_border-right_color.asp\""};
const cssBorderrightstyle = {name: "border-right-style", type: "CSS", example: "N/A", definition: "Sets the style of the right border", url: "a href=\"https://www.w3schools.com/cssref/pr_border-right_style.asp\""};
const cssBorderrightwidth = {name: "border-right-width", type: "CSS", example: "N/A", definition: "Sets the width of the right border", url: "a href=\"https://www.w3schools.com/cssref/pr_border-right_width.asp\""};
const cssBorderspacing = {name: "border-spacing", type: "CSS", example: "N/A", definition: "Sets the distance between the borders of adjacent cells", url: "a href=\"https://www.w3schools.com/cssref/pr_border-spacing.asp\""};
const cssBorderstyle = {name: "border-style", type: "CSS", example: "N/A", definition: "Sets the style of the four borders", url: "a href=\"https://www.w3schools.com/cssref/pr_border-style.asp\""};
const cssBordertop = {name: "border-top", type: "CSS", example: "N/A", definition: "A shorthand property for setting all the top border properties in one declaration", url: "a href=\"https://www.w3schools.com/cssref/pr_border-top.asp\""};
const cssBordertopcolor = {name: "border-top-color", type: "CSS", example: "N/A", definition: "Sets the color of the top border", url: "a href=\"https://www.w3schools.com/cssref/pr_border-top_color.asp\""};
const cssBordertopleftradius = {name: "border-top-left-radius", type: "CSS", example: "N/A", definition: "Defines the radius of the border of the top-left corner", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_border-top-left-radius.asp\""};
const cssBordertoprightradius = {name: "border-top-right-radius", type: "CSS", example: "N/A", definition: "Defines the radius of the border of the top-right corner", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_border-top-right-radius.asp\""};
const cssBordertopstyle = {name: "border-top-style", type: "CSS", example: "N/A", definition: "Sets the style of the top border", url: "a href=\"https://www.w3schools.com/cssref/pr_border-top_style.asp\""};
const cssBordertopwidth = {name: "border-top-width", type: "CSS", example: "N/A", definition: "Sets the width of the top border", url: "a href=\"https://www.w3schools.com/cssref/pr_border-top_width.asp\""};
const cssBorderwidth = {name: "border-width", type: "CSS", example: "N/A", definition: "Sets the width of the four borders", url: "a href=\"https://www.w3schools.com/cssref/pr_border-width.asp\""};
const cssBottom = {name: "bottom", type: "CSS", example: "N/A", definition: "Sets the elements position, from the bottom of its parent element", url: "a href=\"https://www.w3schools.com/cssref/pr_pos_bottom.asp\""};
const cssBoxdecorationbreak = {name: "box-decoration-break", type: "CSS", example: "N/A", definition: "Sets the behavior of the background and border of an element at page-break, or, for in-line elements, at line-break.", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_box-decoration-break.asp\""};
const cssBoxshadow = {name: "box-shadow", type: "CSS", example: "N/A", definition: "Attaches one or more shadows to an element", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_box-shadow.asp\""};
const cssBoxsizing = {name: "box-sizing", type: "CSS", example: "N/A", definition: "Defines how the width and height of an element are calculated: should they include padding and borders, or not", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_box-sizing.asp\""};
const cssBreakafter = {name: "break-after", type: "CSS", example: "N/A", definition: "Specifies the page-, column-, or region-break behavior after the generated box", url: "no link, sorry..."};
const cssBreakbefore = {name: "break-before", type: "CSS", example: "N/A", definition: "Specifies the page-, column-, or region-break behavior before the generated box", url: "no link, sorry..."};
const cssBreakinside = {name: "break-inside", type: "CSS", example: "N/A", definition: "Specifies the page-, column-, or region-break behavior inside the generated box", url: "no link, sorry..."};
const cssCaptionside = {name: "caption-side", type: "CSS", example: "N/A", definition: "Specifies the placement of a table caption", url: "a href=\"https://www.w3schools.com/cssref/pr_tab_caption-side.asp\""};
const cssCaretcolor = {name: "caret-color", type: "CSS", example: "N/A", definition: "Specifies the color of the cursor (caret) in inputs, textareas, or any element that is editable", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_caret-color.asp\""};
const cssClear = {name: "clear", type: "CSS", example: "N/A", definition: "Specifies on which sides of an element floating elements are not allowed to float", url: "a href=\"https://www.w3schools.com/cssref/pr_class_clear.asp\""};
const cssClip = {name: "clip", type: "CSS", example: "N/A", definition: "Clips an absolutely positioned element", url: "a href=\"https://www.w3schools.com/cssref/pr_pos_clip.asp\""};
const cssColor = {name: "color", type: "CSS", example: "N/A", definition: "Sets the color of text", url: "a href=\"https://www.w3schools.com/cssref/pr_text_color.asp\""};
const cssColumncount = {name: "column-count", type: "CSS", example: "N/A", definition: "Specifies the number of columns an element should be divided into", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_column-count.asp\""};
const cssColumnfill = {name: "column-fill", type: "CSS", example: "N/A", definition: "Specifies how to fill columns, balanced or not", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_column-fill.asp\""};
const cssColumngap = {name: "column-gap", type: "CSS", example: "N/A", definition: "Specifies the gap between the columns", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_column-gap.asp\""};
const cssColumnrule = {name: "column-rule", type: "CSS", example: "N/A", definition: "A shorthand property for setting all the column-rule-* properties", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_column-rule.asp\""};
const cssColumnrulecolor = {name: "column-rule-color", type: "CSS", example: "N/A", definition: "Specifies the color of the rule between columns", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_column-rule-color.asp\""};
const cssColumnrulestyle = {name: "column-rule-style", type: "CSS", example: "N/A", definition: "Specifies the style of the rule between columns", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_column-rule-style.asp\""};
const cssColumnrulewidth = {name: "column-rule-width", type: "CSS", example: "N/A", definition: "Specifies the width of the rule between columns", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_column-rule-width.asp\""};
const cssColumnspan = {name: "column-span", type: "CSS", example: "N/A", definition: "Specifies how many columns an element should span across", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_column-span.asp\""};
const cssColumnwidth = {name: "column-width", type: "CSS", example: "N/A", definition: "Specifies the column width", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_column-width.asp\""};
const cssColumns = {name: "columns", type: "CSS", example: "N/A", definition: "A shorthand property for setting column-width and column-count", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_columns.asp\""};
const cssContent = {name: "content", type: "CSS", example: "N/A", definition: "Used with the :before and :after pseudo-elements, to insert generated content", url: "a href=\"https://www.w3schools.com/cssref/pr_gen_content.asp\""};
const cssCounterincrement = {name: "counter-increment", type: "CSS", example: "N/A", definition: "Increases or decreases the value of one or more CSS counters", url: "a href=\"https://www.w3schools.com/cssref/pr_gen_counter-increment.asp\""};
const cssCounterreset = {name: "counter-reset", type: "CSS", example: "N/A", definition: "Creates or resets one or more CSS counters", url: "a href=\"https://www.w3schools.com/cssref/pr_gen_counter-reset.asp\""};
const cssCursor = {name: "cursor", type: "CSS", example: "N/A", definition: "Specifies the mouse cursor to be displayed when pointing over an element", url: "a href=\"https://www.w3schools.com/cssref/pr_class_cursor.asp\""};
const cssDirection = {name: "direction", type: "CSS", example: "N/A", definition: "Specifies the text direction/writing direction", url: "a href=\"https://www.w3schools.com/cssref/pr_text_direction.asp\""};
const cssDisplay = {name: "display", type: "CSS", example: "N/A", definition: "Specifies how a certain HTML element should be displayed", url: "a href=\"https://www.w3schools.com/cssref/pr_class_display.asp\""};
const cssEmptycells = {name: "empty-cells", type: "CSS", example: "N/A", definition: "Specifies whether or not to display borders and background on empty cells in a table", url: "a href=\"https://www.w3schools.com/cssref/pr_tab_empty-cells.asp\""};
const cssFilter = {name: "filter", type: "CSS", example: "N/A", definition: "Defines effects (e.g. blurring or color shifting) on an element before the element is displayed", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_filter.asp\""};
const cssFlex = {name: "flex", type: "CSS", example: "N/A", definition: "A shorthand property for the flex-grow, flex-shrink, and the flex-basis properties", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_flex.asp\""};
const cssFlexbasis = {name: "flex-basis", type: "CSS", example: "N/A", definition: "Specifies the initial length of a flexible item", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_flex-basis.asp\""};
const cssFlexdirection = {name: "flex-direction", type: "CSS", example: "N/A", definition: "Specifies the direction of the flexible items", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_flex-direction.asp\""};
const cssFlexflow = {name: "flex-flow", type: "CSS", example: "N/A", definition: "A shorthand property for the flex-direction and the flex-wrap properties", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_flex-flow.asp\""};
const cssFlexgrow = {name: "flex-grow", type: "CSS", example: "N/A", definition: "Specifies how much the item will grow relative to the rest", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_flex-grow.asp\""};
const cssFlexshrink = {name: "flex-shrink", type: "CSS", example: "N/A", definition: "Specifies how the item will shrink relative to the rest", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_flex-shrink.asp\""};
const cssFlexwrap = {name: "flex-wrap", type: "CSS", example: "N/A", definition: "Specifies whether the flexible items should wrap or not", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_flex-wrap.asp\""};
const cssFloat = {name: "float", type: "CSS", example: "N/A", definition: "Specifies whether or not a box should float", url: "a href=\"https://www.w3schools.com/cssref/pr_class_float.asp\""};
const cssFont = {name: "font", type: "CSS", example: "N/A", definition: "Sets all the font properties in one declaration", url: "a href=\"https://www.w3schools.com/cssref/pr_font_font.asp\""};
const cssFontfamily = {name: "font-family", type: "CSS", example: "N/A", definition: "Specifies the font family for text", url: "a href=\"https://www.w3schools.com/cssref/pr_font_font-family.asp\""};
const cssFontfeaturesettings = {name: "font-feature-settings", type: "CSS", example: "N/A", definition: "Allows control over advanced typographic features in OpenType fonts", url: "no link, sorry..."};
const cssFontkerning = {name: "font-kerning", type: "CSS", example: "N/A", definition: "Controls the usage of the kerning information (how letters are spaced)", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_font-kerning.asp\""};
const cssFontlanguageoverride = {name: "font-language-override", type: "CSS", example: "N/A", definition: "Controls the usage of language-specific glyphs in a typeface", url: "no link, sorry..."};
const cssFontsize = {name: "font-size", type: "CSS", example: "N/A", definition: "Specifies the font size of text", url: "a href=\"https://www.w3schools.com/cssref/pr_font_font-size.asp\""};
const cssFontsizeadjust = {name: "font-size-adjust", type: "CSS", example: "N/A", definition: "Preserves the readability of text when font fallback occurs", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_font-size-adjust.asp\""};
const cssFontstretch = {name: "font-stretch", type: "CSS", example: "N/A", definition: "Selects a normal, condensed, or expanded face from a font family", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_font-stretch.asp\""};
const cssFontstyle = {name: "font-style", type: "CSS", example: "N/A", definition: "Specifies the font style for text", url: "a href=\"https://www.w3schools.com/cssref/pr_font_font-style.asp\""};
const cssFontsynthesis = {name: "font-synthesis", type: "CSS", example: "N/A", definition: "Controls which missing typefaces (bold or italic) may be synthesized by the browser", url: "no link, sorry..."};
const cssFontvariant = {name: "font-variant", type: "CSS", example: "N/A", definition: "Specifies whether or not a text should be displayed in a small-caps font", url: "a href=\"https://www.w3schools.com/cssref/pr_font_font-variant.asp\""};
const cssFontvariantalternates = {name: "font-variant-alternates", type: "CSS", example: "N/A", definition: "Controls the usage of alternate glyphs associated to alternative names defined in @font-feature-values", url: "no link, sorry..."};
const cssFontvariantcaps = {name: "font-variant-caps", type: "CSS", example: "N/A", definition: "Controls the usage of alternate glyphs for capital letters", url: "no link, sorry..."};
const cssFontvarianteastasian = {name: "font-variant-east-asian", type: "CSS", example: "N/A", definition: "Controls the usage of alternate glyphs for East Asian scripts (e.g Japanese and Chinese)", url: "no link, sorry..."};
const cssFontvariantligatures = {name: "font-variant-ligatures", type: "CSS", example: "N/A", definition: "Controls which ligatures and contextual forms are used in textual content of the elements it applies to", url: "no link, sorry..."};
const cssFontvariantnumeric = {name: "font-variant-numeric", type: "CSS", example: "N/A", definition: "Controls the usage of alternate glyphs for numbers, fractions, and ordinal markers", url: "no link, sorry..."};
const cssFontvariantposition = {name: "font-variant-position", type: "CSS", example: "N/A", definition: "Controls the usage of alternate glyphs of smaller size positioned as superscript or subscript regarding the baseline of the font", url: "no link, sorry..."};
const cssFontweight = {name: "font-weight", type: "CSS", example: "N/A", definition: "Specifies the weight of a font", url: "a href=\"https://www.w3schools.com/cssref/pr_font_weight.asp\""};
const cssGrid = {name: "grid", type: "CSS", example: "N/A", definition: "A shorthand property", url: "a href=\"https://www.w3schools.com/cssref/pr_grid.asp\""};
const cssGridarea = {name: "grid-area", type: "CSS", example: "N/A", definition: "Either specifies a name for the grid item, or this property is a shorthand property for the grid-row-start, grid-column-start, grid-row-end, and grid-column-end properties", url: "a href=\"https://www.w3schools.com/cssref/pr_grid-area.asp\""};
const cssGridautocolumns = {name: "grid-auto-columns", type: "CSS", example: "N/A", definition: "Specifies a default column size", url: "a href=\"https://www.w3schools.com/cssref/pr_grid-auto-columns.asp\""};
const cssGridautoflow = {name: "grid-auto-flow", type: "CSS", example: "N/A", definition: "Specifies how auto-placed items are inserted in the grid", url: "a href=\"https://www.w3schools.com/cssref/pr_grid-auto-flow.asp\""};
const cssGridautorows = {name: "grid-auto-rows", type: "CSS", example: "N/A", definition: "Specifies a default row size", url: "a href=\"https://www.w3schools.com/cssref/pr_grid-auto-rows.asp\""};
const cssGridcolumn = {name: "grid-column", type: "CSS", example: "N/A", definition: "A shorthand property for the grid-column-start and the grid-column-endproperties", url: "a href=\"https://www.w3schools.com/cssref/pr_grid-column.asp\""};
const cssGridcolumnend = {name: "grid-column-end", type: "CSS", example: "N/A", definition: "Specifies where to end the grid item", url: "a href=\"https://www.w3schools.com/cssref/pr_grid-column-end.asp\""};
const cssGridcolumngap = {name: "grid-column-gap", type: "CSS", example: "N/A", definition: "Specifies the size of the gap between columns", url: "a href=\"https://www.w3schools.com/cssref/pr_grid-column-gap.asp\""};
const cssGridcolumnstart = {name: "grid-column-start", type: "CSS", example: "N/A", definition: "Specifies where to start the grid item", url: "a href=\"https://www.w3schools.com/cssref/pr_grid-column-start.asp\""};
const cssGridgap = {name: "grid-gap", type: "CSS", example: "N/A", definition: "A shorthand property for the grid-row-gap and grid-column-gap properties", url: "a href=\"https://www.w3schools.com/cssref/pr_grid-gap.asp\""};
const cssGridrow = {name: "grid-row", type: "CSS", example: "N/A", definition: "A shorthand property for the grid-row-start and the grid-row-end properties", url: "a href=\"https://www.w3schools.com/cssref/pr_grid-row.asp\""};
const cssGridrowend = {name: "grid-row-end", type: "CSS", example: "N/A", definition: "Specifies where to end the grid item", url: "a href=\"https://www.w3schools.com/cssref/pr_grid-row-end.asp\""};
const cssGridrowgap = {name: "grid-row-gap", type: "CSS", example: "N/A", definition: "Specifies the size of the gap between rows", url: "a href=\"https://www.w3schools.com/cssref/pr_grid-row-gap.asp\""};
const cssGridrowstart = {name: "grid-row-start", type: "CSS", example: "N/A", definition: "Specifies where to start the grid item", url: "a href=\"https://www.w3schools.com/cssref/pr_grid-row-start.asp\""};
const cssGridtemplate = {name: "grid-template", type: "CSS", example: "N/A", definition: "A shorthand property for the grid-template-rows, grid-template-columns and grid-areas properties", url: "a href=\"https://www.w3schools.com/cssref/pr_grid-template.asp\""};
const cssGridtemplateareas = {name: "grid-template-areas", type: "CSS", example: "N/A", definition: "Specifies how to display columns and rows, using named grid items", url: "a href=\"https://www.w3schools.com/cssref/pr_grid-template-areas.asp\""};
const cssGridtemplatecolumns = {name: "grid-template-columns", type: "CSS", example: "N/A", definition: "Specifies the size of the columns, and how many columns in a grid layout", url: "a href=\"https://www.w3schools.com/cssref/pr_grid-template-columns.asp\""};
const cssGridtemplaterows = {name: "grid-template-rows", type: "CSS", example: "N/A", definition: "Specifies the size of the rows in a grid layout", url: "a href=\"https://www.w3schools.com/cssref/pr_grid-template-rows.asp\""};
const cssHangingpunctuation = {name: "hanging-punctuation", type: "CSS", example: "N/A", definition: "Specifies whether a punctuation character may be placed outside the line box", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_hanging-punctuation.asp\""};
const cssHeight = {name: "height", type: "CSS", example: "N/A", definition: "Sets the height of an element", url: "a href=\"https://www.w3schools.com/cssref/pr_dim_height.asp\""};
const cssHyphens = {name: "hyphens", type: "CSS", example: "N/A", definition: "Sets how to split words to improve the layout of paragraphs", url: "no link, sorry..."};
const cssImageorientation = {name: "image-orientation", type: "CSS", example: "N/A", definition: "Specifies a rotation in the right or clockwise direction that a user agent applies to an image (This property is likely going to be deprecated and its functionality moved to HTML)", url: "no link, sorry..."};
const cssImagerendering = {name: "image-rendering", type: "CSS", example: "N/A", definition: "Gives a hint to the browser about what aspects of an image are most important to preserve when the image is scaled", url: "no link, sorry..."};
const cssImageresolution = {name: "image-resolution", type: "CSS", example: "N/A", definition: "Specifies the intrinsic resolution of all raster images used in/on the element", url: "no link, sorry..."};
const cssJustifycontent = {name: "justify-content", type: "CSS", example: "N/A", definition: "Specifies the alignment between the items inside a flexible container when the items do not use all available space", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_justify-content.asp\""};
const cssLeft = {name: "left", type: "CSS", example: "N/A", definition: "Specifies the left position of a positioned element", url: "a href=\"https://www.w3schools.com/cssref/pr_pos_left.asp\""};
const cssLetterspacing = {name: "letter-spacing", type: "CSS", example: "N/A", definition: "Increases or decreases the space between characters in a text", url: "a href=\"https://www.w3schools.com/cssref/pr_text_letter-spacing.asp\""};
const cssLinebreak = {name: "line-break", type: "CSS", example: "N/A", definition: "Specifies how/if to break lines", url: "no link, sorry..."};
const cssLineheight = {name: "line-height", type: "CSS", example: "N/A", definition: "Sets the line height", url: "a href=\"https://www.w3schools.com/cssref/pr_dim_line-height.asp\""};
const cssListstyle = {name: "list-style", type: "CSS", example: "N/A", definition: "Sets all the properties for a list in one declaration", url: "a href=\"https://www.w3schools.com/cssref/pr_list-style.asp\""};
const cssListstyleimage = {name: "list-style-image", type: "CSS", example: "N/A", definition: "Specifies an image as the list-item marker", url: "a href=\"https://www.w3schools.com/cssref/pr_list-style-image.asp\""};
const cssListstyleposition = {name: "list-style-position", type: "CSS", example: "N/A", definition: "Specifies the position of the list-item markers (bullet points)", url: "a href=\"https://www.w3schools.com/cssref/pr_list-style-position.asp\""};
const cssListstyletype = {name: "list-style-type", type: "CSS", example: "N/A", definition: "Specifies the type of list-item marker", url: "a href=\"https://www.w3schools.com/cssref/pr_list-style-type.asp\""};
const cssMargin = {name: "margin", type: "CSS", example: "N/A", definition: "Sets all the margin properties in one declaration", url: "a href=\"https://www.w3schools.com/cssref/pr_margin.asp\""};
const cssMarginbottom = {name: "margin-bottom", type: "CSS", example: "N/A", definition: "Sets the bottom margin of an element", url: "a href=\"https://www.w3schools.com/cssref/pr_margin-bottom.asp\""};
const cssMarginleft = {name: "margin-left", type: "CSS", example: "N/A", definition: "Sets the left margin of an element", url: "a href=\"https://www.w3schools.com/cssref/pr_margin-left.asp\""};
const cssMarginright = {name: "margin-right", type: "CSS", example: "N/A", definition: "Sets the right margin of an element", url: "a href=\"https://www.w3schools.com/cssref/pr_margin-right.asp\""};
const cssMargintop = {name: "margin-top", type: "CSS", example: "N/A", definition: "Sets the top margin of an element", url: "a href=\"https://www.w3schools.com/cssref/pr_margin-top.asp\""};
const cssMaxheight = {name: "max-height", type: "CSS", example: "N/A", definition: "Sets the maximum height of an element", url: "a href=\"https://www.w3schools.com/cssref/pr_dim_max-height.asp\""};
const cssMaxwidth = {name: "max-width", type: "CSS", example: "N/A", definition: "Sets the maximum width of an element", url: "a href=\"https://www.w3schools.com/cssref/pr_dim_max-width.asp\""};
const cssMinheight = {name: "min-height", type: "CSS", example: "N/A", definition: "Sets the minimum height of an element", url: "a href=\"https://www.w3schools.com/cssref/pr_dim_min-height.asp\""};
const cssMinwidth = {name: "min-width", type: "CSS", example: "N/A", definition: "Sets the minimum width of an element", url: "a href=\"https://www.w3schools.com/cssref/pr_dim_min-width.asp\""};
const cssObjectfit = {name: "object-fit", type: "CSS", example: "N/A", definition: "Specifies how the contents of a replaced element should be fitted to the box established by its used height and width", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_object-fit.asp\""};
const cssObjectposition = {name: "object-position", type: "CSS", example: "N/A", definition: "Specifies the alignment of the replaced element inside its box", url: "no link, sorry..."};
const cssOpacity = {name: "opacity", type: "CSS", example: "N/A", definition: "Sets the opacity level for an element", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_opacity.asp\""};
const cssOrder = {name: "order", type: "CSS", example: "N/A", definition: "Sets the order of the flexible item, relative to the rest", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_order.asp\""};
const cssOrphans = {name: "orphans", type: "CSS", example: "N/A", definition: "Sets the minimum number of lines that must be left at the bottom of a page when a page break occurs inside an element", url: "no link, sorry..."};
const cssOutline = {name: "outline", type: "CSS", example: "N/A", definition: "Sets all the outline properties in one declaration", url: "a href=\"https://www.w3schools.com/cssref/pr_outline.asp\""};
const cssOutlinecolor = {name: "outline-color", type: "CSS", example: "N/A", definition: "Sets the color of an outline", url: "a href=\"https://www.w3schools.com/cssref/pr_outline-color.asp\""};
const cssOutlineoffset = {name: "outline-offset", type: "CSS", example: "N/A", definition: "Offsets an outline, and draws it beyond the border edge", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_outline-offset.asp\""};
const cssOutlinestyle = {name: "outline-style", type: "CSS", example: "N/A", definition: "Sets the style of an outline", url: "a href=\"https://www.w3schools.com/cssref/pr_outline-style.asp\""};
const cssOutlinewidth = {name: "outline-width", type: "CSS", example: "N/A", definition: "Sets the width of an outline", url: "a href=\"https://www.w3schools.com/cssref/pr_outline-width.asp\""};
const cssOverflow = {name: "overflow", type: "CSS", example: "N/A", definition: "Specifies what happens if content overflows an element's box", url: "a href=\"https://www.w3schools.com/cssref/pr_pos_overflow.asp\""};
const cssOverflowwrap = {name: "overflow-wrap", type: "CSS", example: "N/A", definition: "Specifies whether or not the browser may break lines within words in order to prevent overflow (when a string is too long to fit its containing box)", url: "no link, sorry..."};
const cssOverflowx = {name: "overflow-x", type: "CSS", example: "N/A", definition: "Specifies whether or not to clip the left/right edges of the content, if it overflows the element's content area", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_overflow-x.asp\""};
const cssOverflowy = {name: "overflow-y", type: "CSS", example: "N/A", definition: "Specifies whether or not to clip the top/bottom edges of the content, if it overflows the element's content area", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_overflow-y.asp\""};
const cssPadding = {name: "padding", type: "CSS", example: "N/A", definition: "Sets all the padding properties in one declaration", url: "a href=\"https://www.w3schools.com/cssref/pr_padding.asp\""};
const cssPaddingbottom = {name: "padding-bottom", type: "CSS", example: "N/A", definition: "Sets the bottom padding of an element", url: "a href=\"https://www.w3schools.com/cssref/pr_padding-bottom.asp\""};
const cssPaddingleft = {name: "padding-left", type: "CSS", example: "N/A", definition: "Sets the left padding of an element", url: "a href=\"https://www.w3schools.com/cssref/pr_padding-left.asp\""};
const cssPaddingright = {name: "padding-right", type: "CSS", example: "N/A", definition: "Sets the right padding of an element", url: "a href=\"https://www.w3schools.com/cssref/pr_padding-right.asp\""};
const cssPaddingtop = {name: "padding-top", type: "CSS", example: "N/A", definition: "Sets the top padding of an element", url: "a href=\"https://www.w3schools.com/cssref/pr_padding-top.asp\""};
const cssPagebreakafter = {name: "page-break-after", type: "CSS", example: "N/A", definition: "Sets the page-breaking behavior after an element", url: "a href=\"https://www.w3schools.com/cssref/pr_print_pageba.asp\""};
const cssPagebreakbefore = {name: "page-break-before", type: "CSS", example: "N/A", definition: "Sets the page-breaking behavior before an element", url: "a href=\"https://www.w3schools.com/cssref/pr_print_pagebb.asp\""};
const cssPagebreakinside = {name: "page-break-inside", type: "CSS", example: "N/A", definition: "Sets the page-breaking behavior inside an element", url: "a href=\"https://www.w3schools.com/cssref/pr_print_pagebi.asp\""};
const cssPerspective = {name: "perspective", type: "CSS", example: "N/A", definition: "Specifies the perspective on how 3D elements are viewed", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_perspective.asp\""};
const cssPerspectiveorigin = {name: "perspective-origin", type: "CSS", example: "N/A", definition: "Specifies the bottom position of 3D elements", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_perspective-origin.asp\""};
const cssPosition = {name: "position", type: "CSS", example: "N/A", definition: "Specifies the type of positioning method used for an element (static, relative, absolute or fixed)", url: "a href=\"https://www.w3schools.com/cssref/pr_class_position.asp\""};
const cssQuotes = {name: "quotes", type: "CSS", example: "N/A", definition: "Sets the type of quotation marks for embedded quotations", url: "a href=\"https://www.w3schools.com/cssref/pr_gen_quotes.asp\""};
const cssResize = {name: "resize", type: "CSS", example: "N/A", definition: "Specifies whether or not an element is resizable by the user", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_resize.asp\""};
const cssRight = {name: "right", type: "CSS", example: "N/A", definition: "Specifies the right position of a positioned element", url: "a href=\"https://www.w3schools.com/cssref/pr_pos_right.asp\""};
const cssTabsize = {name: "tab-size", type: "CSS", example: "N/A", definition: "Specifies the length of the tab-character", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_tab-size.asp\""};
const cssTablelayout = {name: "table-layout", type: "CSS", example: "N/A", definition: "Sets the layout algorithm to be used for a table", url: "a href=\"https://www.w3schools.com/cssref/pr_tab_table-layout.asp\""};
const cssTextalign = {name: "text-align", type: "CSS", example: "N/A", definition: "Specifies the horizontal alignment of text", url: "a href=\"https://www.w3schools.com/cssref/pr_text_text-align.asp\""};
const cssTextalignlast = {name: "text-align-last", type: "CSS", example: "N/A", definition: "Describes how the last line of a block or a line right before a forced line break is aligned when text-align is 'justify'", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_text-align-last.asp\""};
const cssTextcombineupright = {name: "text-combine-upright", type: "CSS", example: "N/A", definition: "Specifies the combination of multiple characters into the space of a single character", url: "no link, sorry..."};
const cssTextdecoration = {name: "text-decoration", type: "CSS", example: "N/A", definition: "Specifies the decoration added to text", url: "a href=\"https://www.w3schools.com/cssref/pr_text_text-decoration.asp\""};
const cssTextdecorationcolor = {name: "text-decoration-color", type: "CSS", example: "N/A", definition: "Specifies the color of the text-decoration", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_text-decoration-color.asp\""};
const cssTextdecorationline = {name: "text-decoration-line", type: "CSS", example: "N/A", definition: "Specifies the type of line in a text-decoration", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_text-decoration-line.asp\""};
const cssTextdecorationstyle = {name: "text-decoration-style", type: "CSS", example: "N/A", definition: "Specifies the style of the line in a text decoration", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_text-decoration-style.asp\""};
const cssTextindent = {name: "text-indent", type: "CSS", example: "N/A", definition: "Specifies the indentation of the first line in a text-block", url: "a href=\"https://www.w3schools.com/cssref/pr_text_text-indent.asp\""};
const cssTextjustify = {name: "text-justify", type: "CSS", example: "N/A", definition: "Specifies the justification method used when text-align is 'justify'", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_text-justify.asp\""};
const cssTextorientation = {name: "text-orientation", type: "CSS", example: "N/A", definition: "Defines the orientation of the text in a line", url: "no link, sorry..."};
const cssTextoverflow = {name: "text-overflow", type: "CSS", example: "N/A", definition: "Specifies what should happen when text overflows the containing element", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_text-overflow.asp\""};
const cssTextshadow = {name: "text-shadow", type: "CSS", example: "N/A", definition: "Adds shadow to text", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_text-shadow.asp\""};
const cssTexttransform = {name: "text-transform", type: "CSS", example: "N/A", definition: "Controls the capitalization of text", url: "a href=\"https://www.w3schools.com/cssref/pr_text_text-transform.asp\""};
const cssTextunderlineposition = {name: "text-underline-position", type: "CSS", example: "N/A", definition: "Specifies the position of the underline which is set using the text-decoration property", url: "no link, sorry..."};
const cssTop = {name: "top", type: "CSS", example: "N/A", definition: "Specifies the top position of a positioned element", url: "a href=\"https://www.w3schools.com/cssref/pr_pos_top.asp\""};
const cssTransform = {name: "transform", type: "CSS", example: "N/A", definition: "Applies a 2D or 3D transformation to an element", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_transform.asp\""};
const cssTransformorigin = {name: "transform-origin", type: "CSS", example: "N/A", definition: "Allows you to change the position on transformed elements", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_transform-origin.asp\""};
const cssTransformstyle = {name: "transform-style", type: "CSS", example: "N/A", definition: "Specifies how nested elements are rendered in 3D space", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_transform-style.asp\""};
const cssTransition = {name: "transition", type: "CSS", example: "N/A", definition: "A shorthand property for setting the four transition properties", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_transition.asp\""};
const cssTransitiondelay = {name: "transition-delay", type: "CSS", example: "N/A", definition: "Specifies when the transition effect will start", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_transition-delay.asp\""};
const cssTransitionduration = {name: "transition-duration", type: "CSS", example: "N/A", definition: "Specifies how many seconds or milliseconds a transition effect takes to complete", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_transition-duration.asp\""};
const cssTransitionproperty = {name: "transition-property", type: "CSS", example: "N/A", definition: "Specifies the name of the CSS property the transition effect is for", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_transition-property.asp\""};
const cssTransitiontimingfunction = {name: "transition-timing-function", type: "CSS", example: "N/A", definition: "Specifies the speed curve of the transition effect", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp\""};
const cssUnicodebidi = {name: "unicode-bidi", type: "CSS", example: "N/A", definition: "Used together with the direction property to set or return whether the text should be overridden to support multiple languages in the same document", url: "a href=\"https://www.w3schools.com/cssref/pr_text_unicode-bidi.asp\""};
const cssUserselect = {name: "user-select", type: "CSS", example: "N/A", definition: "Specifies whether the text of an element can be selected", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_user-select.asp\""};
const cssVerticalalign = {name: "vertical-align", type: "CSS", example: "N/A", definition: "Sets the vertical alignment of an element", url: "a href=\"https://www.w3schools.com/cssref/pr_pos_vertical-align.asp\""};
const cssVisibility = {name: "visibility", type: "CSS", example: "N/A", definition: "Specifies whether or not an element is visible", url: "a href=\"https://www.w3schools.com/cssref/pr_class_visibility.asp\""};
const cssWhitespace = {name: "white-space", type: "CSS", example: "N/A", definition: "Specifies how white-space inside an element is handled", url: "a href=\"https://www.w3schools.com/cssref/pr_text_white-space.asp\""};
const cssWidows = {name: "widows", type: "CSS", example: "N/A", definition: "Sets the minimum number of lines that must be left at the top of a page when a page break occurs inside an element", url: "no link, sorry..."};
const cssWidth = {name: "width", type: "CSS", example: "N/A", definition: "Sets the width of an element", url: "a href=\"https://www.w3schools.com/cssref/pr_dim_width.asp\""};
const cssWordbreak = {name: "word-break", type: "CSS", example: "N/A", definition: "Specifies line breaking rules for non-CJK scripts", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_word-break.asp\""};
const cssWordspacing = {name: "word-spacing", type: "CSS", example: "N/A", definition: "Increases or decreases the space between words in a text", url: "a href=\"https://www.w3schools.com/cssref/pr_text_word-spacing.asp\""};
const cssWordwrap = {name: "word-wrap", type: "CSS", example: "N/A", definition: "Allows long, unbreakable words to be broken and wrap to the next line", url: "a href=\"https://www.w3schools.com/cssref/css3_pr_word-wrap.asp\""};
const cssZindex = {name: "z-index", type: "CSS", example: "N/A", definition: "Sets the stack order of a positioned element", url: "a href=\"https://www.w3schools.com/cssref/pr_pos_z-index.asp\""};

// Arrays
const htmlArray =[a, abbr, address, area, article, aside, audio, b, base, bdi, bdo, blockquote, body, br, button, canvas, caption, cite, code, col, colgroup, dd, datalist, del, details, dfn, dialog, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, head, header, hr, html, i, iframe, img, input, ins, kbd, label, legend, li, link, main, map, mark, menu, menuitem, meta, meter, nav, noscript, object, ol, optgroup, option, output, p, param, picture, pre, progress, q, rp, rt, ruby, s, samp, script, section, select, small, source, span, strong, style, sub, summary, sup, table, tbody, td, template, textarea, tfoot, th, thead, time, title, tr, track, u, ul, video, wbr];
const cssArray = [cssCharset, cssFontface, cssFontfeaturevalues, cssImport, cssKeyframes, cssMedia, cssAligncontent, cssAlignitems, cssAlignself, cssAll, cssAnimation, cssAnimationdelay, cssAnimationdirection, cssAnimationduration, cssAnimationfillmode, cssAnimationiterationcount, cssAnimationname, cssAnimationplaystate, cssAnimationtimingfunction, cssBackfacevisibility, cssBackground, cssBackgroundblendmode, cssBackgroundattachment, cssBackgroundclip, cssBackgroundcolor, cssBackgroundimage, cssBackgroundorigin, cssBackgroundposition, cssBackgroundrepeat, cssBackgroundsize, cssBorder, cssBorderbottom, cssBorderbottomcolor, cssBorderbottomleftradius, cssBorderbottomrightradius, cssBorderbottomstyle, cssBorderbottomwidth, cssBordercollapse, cssBordercolor, cssBorderimage, cssBorderimageoutset, cssBorderimagerepeat, cssBorderimageslice, cssBorderimagesource, cssBorderimagewidth, cssBorderleft, cssBorderleftcolor, cssBorderleftstyle, cssBorderleftwidth, cssBorderradius, cssBorderright, cssBorderrightcolor, cssBorderrightstyle, cssBorderrightwidth, cssBorderspacing, cssBorderstyle, cssBordertop, cssBordertopcolor, cssBordertopleftradius, cssBordertoprightradius, cssBordertopstyle, cssBordertopwidth, cssBorderwidth, cssBottom, cssBoxdecorationbreak, cssBoxshadow, cssBoxsizing, cssBreakafter, cssBreakbefore, cssBreakinside, cssCaptionside, cssCaretcolor, cssClear, cssClip, cssColor, cssColumncount, cssColumnfill, cssColumngap, cssColumnrule, cssColumnrulecolor, cssColumnrulestyle, cssColumnrulewidth, cssColumnspan, cssColumnwidth, cssColumns, cssContent, cssCounterincrement, cssCounterreset, cssCursor, cssDirection, cssDisplay, cssEmptycells, cssFilter, cssFlex, cssFlexbasis, cssFlexdirection, cssFlexflow, cssFlexgrow, cssFlexshrink, cssFlexwrap, cssFloat, cssFont, cssFontfamily, cssFontfeaturesettings,cssFontkerning, cssFontlanguageoverride, cssFontsize, cssFontsizeadjust, cssFontstretch, cssFontstyle, cssFontsynthesis, cssFontvariant, cssFontvariantalternates, cssFontvariantcaps, cssFontvarianteastasian, cssFontvariantligatures, cssFontvariantnumeric, cssFontvariantposition, cssFontweight, cssGrid, cssGridarea, cssGridautocolumns, cssGridautoflow, cssGridautorows, cssGridcolumn, cssGridcolumnend, cssGridcolumngap, cssGridcolumnstart, cssGridgap, cssGridrow, cssGridrowend, cssGridrowgap, cssGridrowstart, cssGridtemplate, cssGridtemplateareas, cssGridtemplatecolumns, cssGridtemplaterows, cssHangingpunctuation, cssHeight, cssHyphens, cssImageorientation, cssImagerendering, cssImageresolution, cssJustifycontent, cssLeft, cssLetterspacing, cssLinebreak, cssLineheight, cssListstyle, cssListstyleimage, cssListstyleposition, cssListstyletype, cssMargin, cssMarginbottom, cssMarginright, cssMarginleft, cssMargintop, cssMaxheight, cssMaxwidth, cssMinheight, cssMinwidth, cssObjectfit, cssObjectposition, cssOpacity, cssOrder, cssOrphans, cssOutline, cssOutlinecolor, cssOutlineoffset, cssOutlinestyle, cssOutlinewidth, cssOverflow, cssOverflowwrap, cssOverflowx, cssOverflowy, cssPadding, cssPaddingbottom, cssPaddingleft, cssPaddingright, cssPaddingtop, cssPagebreakafter, cssPagebreakbefore, cssPagebreakinside, cssPerspective, cssPerspectiveorigin, cssPosition, cssQuotes, cssResize, cssRight, cssTabsize, cssTablelayout, cssTextalign, cssTextalignlast, cssTextcombineupright, cssTextdecorationcolor, cssTextdecoration, cssTextdecorationline, cssTextdecorationstyle, cssTextindent, cssTextjustify, cssTextorientation, cssTextoverflow, cssTextshadow, cssTexttransform, cssTextunderlineposition, cssTop, cssTransform, cssTransformorigin, cssTransformstyle, cssTransition, cssTransitiondelay, cssTransitionduration, cssTransitionproperty, cssTransitiontimingfunction, cssUnicodebidi, cssUserselect, cssVerticalalign, cssVisibility, cssWhitespace, cssWidows, cssWidth, cssWordbreak, cssWordspacing, cssWordwrap, cssZindex];

// Allowed Characters array
allowedChar= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","-"];

// Performance comment arrays
const kudos = ["Bravo","Well, that for sure looked easy", "Easy enough, huh?","GRrrreat","That one was a no-brainer...","Really?","Think you can do this again?","You are beating the Matrix!","Achievement unlocked: GOD LEVEL!!","Wow, you have to be a TA, aren't you?","...Parker, is it you?"]
const sucker = ["Oops, sorry about that", "Hmm... that one was not obvious, try again!","I am sending you a picture of a kitty, for your trouble...","Were you paying attention?","Ok, wanna cry?","Ready to give up?","You have to be good at something else, right...?","Really?", "I expected better. I am soooo disappointed","Should I dumb it down for you?","Here is a hing: the next one is not something you know. Because, well, you don't know much obviously..."]

// random Arrays
let randomHtml = htmlArray[Math.floor(Math.random()*htmlArray.length)];
let randomCss = cssArray[Math.floor(Math.random()*cssArray.length)];

// show me the object
// console.log("This is the word to guess: " + randomHtml.name);
// console.log("----------------");

// show me the name (aka: the word to guess)
let riddle = randomHtml.name;
// console.log("This is the length of the word to guess: " + riddle.length);
// console.log("----------------");


// Text on main page 
let w3Link = "click this <" + randomHtml.url + ">link</a> for more information";
// let hiddenChar = " _ "
let maskedWord = [];
for (let i = 0; i < riddle.length; i++) {
    maskedWord[i] = " _ ";
}


// maskedWord = Array(riddle.length + 1).join(" _ ");

// let maskedWord =[];
// for (var j=0; j<riddle.length; j++) {
//     maskedWord[i]= "_";
// } 
// console.log("This is how the word should display: " + maskedWord);
// console.log("----------------");


// splitting the word to guess into characters in an array
let wordToGuess = riddle.split("");
// console.log("Word to guess letter by letter (as an array)= " + wordToGuess);
// console.log("----------------");

var allLegitKeysPressed = [];
var keyName;
var tallyGuesses;

// number guesses allowed assigned to variable numGuesses (if word too small: less guesses)
var numGuesses;
if (riddle.length < 4) {
    numGuesses = riddle.length + 2;
} 
else {
    numGuesses = riddle.length + 5;
}

// // number guesses allowed (same for every word to guess)
// var numGuesses = riddle.length + 2;

// console.log("Number of guesses allowed: " + numGuesses)
// console.log("-------------------")
document.querySelector("#element_definition").innerHTML= randomHtml.definition

// the function happens too early
document.onkeyup = function(event) {
    keyName = event.key;
    // including the function here allows it to run when key is pressed!!
    checkGuessValidity();
    guessForTheWin();
    resetGame();
    // counters();
    // checkDuplicate();
    // console.log("value in the local scope " + keyName);
    // Content to populate on main page
    // document.querySelector("#element_name").innerHTML= riddle
    document.querySelector("#word_to_guess").innerHTML= maskedWord.join(" ")
    document.querySelector("#element_type").innerHTML= randomHtml.type    
    document.querySelector("#element_example").innerHTML= randomHtml.example
    document.querySelector("#element_url").innerHTML= w3Link    
    document.querySelector("#num_guesses").innerHTML= numGuesses
    document.querySelector("#guesses").innerHTML= allLegitKeysPressed
    // document.querySelector("#rem_guesses").innerHTML= remainingGuesses

// document.querySelector("#l_bracket").innerHTML= lBracket
// document.querySelector("#r_bracket").innerHTML= rBracket


}
// console.log("value in the global scope " + keyName);
// console.log("----------------");

// console.log("Letter guessed in the global scope: " + keyName)
// console.log("----------------");


// console.log("this is the attempted guesses: " + attemptedGuesses);
// console.log("----------------");



var validChar;
var attemptedGuesses= [];
function checkGuessValidity() {
    for (var j = 0; j<allowedChar.length; j++) {
        if (keyName === allowedChar[j]) {
            // console.log(keyName + " is a valid character")
            validChar = keyName;
            allLegitKeysPressed.push(validChar);
            // checkDuplicate();
            // guessForTheWin();
        }
    }
} 

let remainingGuesses = numGuesses;
let goodGuess;
function guessForTheWin () {
    for (var i = 0; i < riddle.length; i++) {
        if (validChar === riddle[i]) {
            // alert("Letter is good!");
            goodGuess = validChar;
            maskedWord.splice(i,1,validChar);
            document.querySelector("#word_to_guess").innerHTML= maskedWord
            
        }
    }
}

function resetGame() {
    console.log("maskedWord: " + maskedWord)
    console.log("wordToGuess: " + wordToGuess)
    for (let i=0; i<numGuesses; i++){
        if (maskedWord === wordToGuess) {
            alert("You won this game")
        }    
    }
}
// remainingGuesses = numGuesses
// function counters() {
//     if (keyName !== goodGuess) {
//         remainingGuesses--;
//     }
// }

