import 'core-js/modules/es.regexp.exec';
import 'core-js/modules/es.string.replace';
import 'core-js/modules/es.string.search';
import 'core-js/modules/es.array.filter';
import 'core-js/modules/es.array.for-each';
import 'core-js/modules/es.array.iterator';
import 'core-js/modules/es.array.map';
import 'core-js/modules/es.array.reduce';
import 'core-js/modules/es.array.slice';
import 'core-js/modules/es.array.some';
import 'core-js/modules/es.date.to-string';
import 'core-js/modules/es.function.name';
import 'core-js/modules/es.object.create';
import 'core-js/modules/es.object.to-string';
import 'core-js/modules/es.promise';
import 'core-js/modules/es.regexp.to-string';
import 'core-js/modules/es.string.iterator';
import 'core-js/modules/es.string.match';
import 'core-js/modules/es.string.split';
import 'core-js/modules/es.string.starts-with';
import 'core-js/modules/web.dom-collections.for-each';
import 'core-js/modules/web.dom-collections.iterator';
import 'core-js/modules/web.timers';
import 'core-js/modules/web.url';
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, N as onMount, v as validate_slots, e as element, g as claim_element, h as children, b as detach_dev, m as attr_dev, l as add_location, n as insert_dev, r as noop, Q as binding_callbacks } from './client.1f6480ea.js';
import 'core-js/modules/es.symbol';
import 'core-js/modules/es.symbol.description';
import 'core-js/modules/es.symbol.async-iterator';
import 'core-js/modules/es.symbol.iterator';
import 'core-js/modules/es.symbol.to-string-tag';
import 'core-js/modules/es.array.reverse';
import 'core-js/modules/es.json.to-string-tag';
import 'core-js/modules/es.math.to-string-tag';
import 'core-js/modules/es.object.get-prototype-of';
import 'core-js/modules/es.object.set-prototype-of';
import 'core-js/modules/es.array.concat';
import 'core-js/modules/es.array.fill';
import 'core-js/modules/es.array.from';
import 'core-js/modules/es.array.index-of';
import 'core-js/modules/es.array.join';
import 'core-js/modules/es.array.splice';
import 'core-js/modules/es.date.now';
import 'core-js/modules/es.map';
import 'core-js/modules/es.object.assign';
import 'core-js/modules/es.object.get-own-property-descriptors';
import 'core-js/modules/es.object.keys';
import 'core-js/modules/es.parse-int';
import 'core-js/modules/es.set';
import 'core-js/modules/es.string.anchor';
import 'core-js/modules/es.array.is-array';
import 'core-js/modules/es.array.find';
import 'core-js/modules/es.function.bind';
import 'core-js/modules/es.object.define-property';
import 'core-js/modules/es.object.get-own-property-descriptor';
import 'core-js/modules/es.weak-map';
import { l as loading } from './markmap.6619b1bc.js';
import 'core-js/modules/es.array.sort';
import 'core-js/modules/es.string.trim';
import 'core-js/modules/es.regexp.constructor';
import 'core-js/modules/es.array-buffer.constructor';
import 'core-js/modules/es.array-buffer.is-view';
import 'core-js/modules/es.array-buffer.slice';
import 'core-js/modules/es.data-view';
import 'core-js/modules/es.array.every';
import 'core-js/modules/es.typed-array.float32-array';
import 'core-js/modules/es.typed-array.copy-within';
import 'core-js/modules/es.typed-array.every';
import 'core-js/modules/es.typed-array.fill';
import 'core-js/modules/es.typed-array.filter';
import 'core-js/modules/es.typed-array.find';
import 'core-js/modules/es.typed-array.find-index';
import 'core-js/modules/es.typed-array.for-each';
import 'core-js/modules/es.typed-array.includes';
import 'core-js/modules/es.typed-array.index-of';
import 'core-js/modules/es.typed-array.iterator';
import 'core-js/modules/es.typed-array.join';
import 'core-js/modules/es.typed-array.last-index-of';
import 'core-js/modules/es.typed-array.map';
import 'core-js/modules/es.typed-array.reduce';
import 'core-js/modules/es.typed-array.reduce-right';
import 'core-js/modules/es.typed-array.reverse';
import 'core-js/modules/es.typed-array.set';
import 'core-js/modules/es.typed-array.slice';
import 'core-js/modules/es.typed-array.some';
import 'core-js/modules/es.typed-array.sort';
import 'core-js/modules/es.typed-array.subarray';
import 'core-js/modules/es.typed-array.to-locale-string';
import 'core-js/modules/es.typed-array.to-string';
import 'core-js/modules/es.number.constructor';
import 'core-js/modules/es.number.to-fixed';
import 'core-js/modules/es.number.to-precision';
import 'core-js/modules/es.math.sign';
import 'core-js/modules/es.math.log10';
import 'core-js/modules/es.math.log2';
import 'core-js/modules/es.math.expm1';
import 'core-js/modules/es.math.log1p';
import 'core-js/modules/es.date.to-iso-string';
import 'core-js/modules/es.object.freeze';
import 'core-js/modules/es.array.flat-map';
import 'core-js/modules/es.array.unscopables.flat-map';
import 'core-js/modules/es.object.entries';
import 'core-js/modules/es.array.includes';
import 'core-js/modules/es.string.ends-with';

var usage = "<h1 id=\"usage\">Usage</h1>\n<p><img src=\"https://img.shields.io/npm/v/markmap-lib.svg\" alt=\"NPM\">\n<img src=\"https://img.shields.io/npm/l/markmap-lib.svg\" alt=\"License\">\n<img src=\"https://img.shields.io/npm/dt/markmap-lib.svg\" alt=\"Downloads\"></p>\n<h2 id=\"command-line\">Command-line</h2>\n<h3 id=\"installation\">Installation</h3>\n<p>Install globally:</p>\n<pre><code class=\"language-bash\">$ yarn global add markmap-lib\n# or\n$ npm install markmap-lib -g</code></pre>\n<p>or use with <code>npx</code>:</p>\n<pre><code class=\"language-bash\">$ npx markmap-lib</code></pre>\n<h3 id=\"commands\">Commands</h3>\n<pre><code>Usage: markmap [options] &lt;input&gt;\n\nCreate a markmap from a Markdown input file\n\nOptions:\n  -V, --version          output the version number\n  -o, --output &lt;output&gt;  specify filename of the output HTML\n  --enable-mathjax       enable MathJax support\n  --enable-prism         enable PrismJS support\n  --no-open              do not open the output file after generation\n  -h, --help             display help for command</code></pre>\n<p>Suppose we have a Markdown file named <code>note.md</code>.</p>\n<p>Run the following command to get an interactive mindmap:</p>\n<pre><code class=\"language-bash\">$ markmap note.md\n\n# without global installation\n$ npx markmap-lib note.md</code></pre>\n<p>Then we get <code>note.html</code> in the same directory, and hopefully it will be open in your default browser.</p>\n<h2 id=\"api\">API</h2>\n<h3 id=\"installation-1\">Installation</h3>\n<pre><code class=\"language-bash\">$ yarn add markmap-lib\n# or\n$ npm install markmap-lib</code></pre>\n<h3 id=\"transform\">Transform</h3>\n<p>Transform Markdown to markmap data:</p>\n<pre><code class=\"language-js\">import { transform } from &#39;markmap-lib/dist/transform&#39;;\n\nconst data = transform(markdown);</code></pre>\n<p>Now we get the data for rendering in <code>data</code>.</p>\n<h3 id=\"render\">Render</h3>\n<p>Render a markmap from transformed data:</p>\n<p>Create an SVG element with explicit width and height:</p>\n<pre><code class=\"language-html\">&lt;svg id=&quot;markmap&quot; style=&quot;width: 800px; height: 800px&quot;&gt;&lt;/svg&gt;</code></pre>\n<p>Render a markmap to the SVG element:</p>\n<pre><code class=\"language-js\">import { Markmap } from &#39;markmap-lib/dist/view&#39;;\n\nMarkmap.create(&#39;#markmap&#39;, null, data);\n\n// or pass an SVG element directly\nconst svgEl = document.querySelector(&#39;#markmap&#39;);\nMarkmap.create(svgEl, null, data);</code></pre>\n<h2 id=\"plugins\">Plugins</h2>\n<ul>\n<li><code>mathJax</code> - MathJax</li>\n<li><code>prism</code> - PrismJS</li>\n</ul>\n<h3 id=\"command-line-1\">Command-line</h3>\n<p>To enable plugins in command line, just add the related option, for example:</p>\n<pre><code class=\"language-bash\">$ markmap note.md --enable-mathjax --enable-prism</code></pre>\n<h3 id=\"api-1\">API</h3>\n<p><code>loadPlugins</code> loads necessary CSS and JavaScript files.</p>\n<pre><code class=\"language-js\">import { Markmap, loadPlugins } from &#39;markmap-lib/dist/view&#39;;\n\nloadPlugins([\n  &#39;mathJax&#39;,\n  &#39;prism&#39;,\n])\n.then(() =&gt; {\n  Markmap.create(&#39;#markmap&#39;, null, data);\n});</code></pre>\n<h2 id=\"related\">Related</h2>\n<ul>\n<li>Use with Vim / Neovim: <a href=\"https://github.com/gera2ld/coc-markmap\">coc-markmap</a></li>\n<li>Use with GatsbyJS: <a href=\"https://github.com/gera2ld/gatsby-remark-markmap\">gatsby-remark-markmap</a></li>\n</ul>\n";

/* src/routes/usage.svelte generated by Svelte v3.22.3 */
const file = "src/routes/usage.svelte";

function create_fragment(ctx) {
	let div;

	const block = {
		c: function create() {
			div = element("div");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "markdown");
			add_location(div, file, 13, 0, 237);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			div.innerHTML = usage;
			/*div_binding*/ ctx[1](div);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			/*div_binding*/ ctx[1](null);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let main;

	onMount(async () => {
		await loading;
		window.Prism.highlightAllUnder(main);
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Usage> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Usage", $$slots, []);

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(0, main = $$value);
		});
	}

	$$self.$capture_state = () => ({ onMount, usage, loading, main });

	$$self.$inject_state = $$props => {
		if ("main" in $$props) $$invalidate(0, main = $$props.main);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [main, div_binding];
}

class Usage extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Usage",
			options,
			id: create_fragment.name
		});
	}
}

export default Usage;
