var ac_main =
webpackJsonpac__name_([3],{

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*eslint-disable no-unused-vars*/
/*!
 * jQuery JavaScript Library v3.1.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-07-07T21:44Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.1.0",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.0
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-01-04
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true;
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {
	// Known :disabled false positives:
	// IE: *[disabled]:not(button, input, select, textarea, optgroup, option, menuitem, fieldset)
	// not IE: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Check form elements and option elements for explicit disabling
		return "label" in elem && elem.disabled === disabled ||
			"form" in elem && elem.disabled === disabled ||

			// Check non-disabled form elements for fieldset[disabled] ancestors
			"form" in elem && elem.disabled === false && (
				// Support: IE6-11+
				// Ancestry is covered for us
				elem.isDisabled === disabled ||

				// Otherwise, assume any non-<option> under fieldset[disabled] is disabled
				/* jshint -W018 */
				elem.isDisabled !== !disabled &&
					("label" in elem || !disabledAncestor( elem )) !== disabled
			);
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				return m ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnotwhite = ( /\S+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			resolve.call( undefined, value );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.call( undefined, value );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnotwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :

					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? JSON.parse( data ) :
					data;
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) ),
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Support: IE <=9
		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		//
		// Support: Firefox <=42
		// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
		if ( delegateCount && cur.nodeType &&
			( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push( { elem: cur, handlers: matches } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			return ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

function manipulationTarget( elem, content ) {
	if ( jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?

		// If we already have the right measurement, avoid augmentation
		4 :

		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var val,
		valueIsBorderBox = true,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if ( elem.getClientRects().length ) {
		val = elem.getBoundingClientRect()[ name ];
	}

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function raf() {
	if ( timerId ) {
		window.requestAnimationFrame( raf );
		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnotwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off or if document is hidden
	if ( jQuery.fx.off || document.hidden ) {
		opt.duration = 0;

	} else {
		opt.duration = typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.requestAnimationFrame ?
			window.requestAnimationFrame( raf ) :
			window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	if ( window.cancelAnimationFrame ) {
		window.cancelAnimationFrame( timerId );
	} else {
		window.clearInterval( timerId );
	}

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {
			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




var rclass = /[\t\r\n\f]/g;

function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnotwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + getClass( elem ) + " " ).replace( rclass, " " )
					.indexOf( className ) > -1
			) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g,
	rspaces = /[\x20\t\r\n\f]+/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?

					// Handle most common string cases
					ret.replace( rreturn, "" ) :

					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} ) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in uncached url if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rts, "" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win, rect, doc,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		// Make sure element is not hidden (display: none)
		if ( rect.width || rect.height ) {
			doc = elem.ownerDocument;
			win = getWindow( doc );
			docElem = doc.documentElement;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		}

		// Return zeros for disconnected and hidden elements (gh-2310)
		return rect;
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.parseJSON = JSON.parse;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}





var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}


return jQuery;
} );


/***/ },

/***/ 249:
/***/ function(module, exports) {

"use strict";
"use strict";
var PageScrollConfig = (function () {
    function PageScrollConfig() {
    }
    Object.defineProperty(PageScrollConfig, "defaultEasingFunction", {
        // Getter and setter to avoid auto completion to suggest calling the method
        get: function () {
            return PageScrollConfig._easingFunction;
        },
        set: function (easingFunction) {
            PageScrollConfig._easingFunction = easingFunction;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * The number of milliseconds to wait till updating the scroll position again.
     * Small amounts may produce smoother animations but require more processing power.
     * @type {number}
     * @private
     */
    PageScrollConfig._interval = 10;
    /**
     * The duration how long a scrollTo animation should last by default.
     * May be overridden using the page-scroll-duration attribute on a single ng2PageScroll instance.
     * @type {number}
     */
    PageScrollConfig.defaultDuration = 1250;
    /**
     * The distance in pixels above scroll target where the animation should stop. Setting a positive number results in
     * the scroll target being more in the middle of the screen, negative numbers will produce scrolling "too far"
     * @type {number}
     */
    PageScrollConfig.defaultScrollOffset = 0;
    /**
     * The events that are listened to on the body to decide whether a scroll animation has been interfered by the user
     * @type {string[]}
     * @private
     */
    PageScrollConfig._interruptEvents = ['mousedown', 'wheel', 'DOMMouseScroll', 'mousewheel', 'keyup', 'touchmove'];
    /**
     * The keys that are considered to interrupt a scroll animation (mainly the arrow keys). All other key presses will not stop the
     * scroll animation.
     * @type {number[]}
     * @private
     */
    PageScrollConfig._interruptKeys = [33, 34, 35, 36, 38, 40];
    /**
     * Whether a scroll animation should be interruptible by user interaction (true) or not (false). If the user performs an
     * interrupting event while a scroll animation takes place, the scroll animation stops.
     * @type {boolean}
     */
    PageScrollConfig.defaultInterruptible = true;
    PageScrollConfig._easingFunction = function (t, b, c, d) {
        // Linear easing
        return c * t / d + b;
    };
    return PageScrollConfig;
}());
exports.PageScrollConfig = PageScrollConfig;


/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* Copyright 2012 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* jshint globalstrict: false */
/* umdutils ignore */

(function (root, factory) {
  'use strict';
  if (true) {
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== 'undefined') {
    factory(exports);
  } else {
factory((root.pdfjsDistBuildPdf = {}));
  }
}(this, function (exports) {
  // Use strict in our context only - users might not want it
  'use strict';

var pdfjsVersion = '1.5.399';
var pdfjsBuild = 'f520616';

  var pdfjsFilePath =
    typeof document !== 'undefined' && document.currentScript ?
      document.currentScript.src : null;

  var pdfjsLibs = {};

  (function pdfjsWrapper() {



(function (root, factory) {
  {
    factory((root.pdfjsSharedUtil = {}));
  }
}(this, function (exports) {

var globalScope = (typeof window !== 'undefined') ? window :
                  (typeof global !== 'undefined') ? global :
                  (typeof self !== 'undefined') ? self : this;

var FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0];

var TextRenderingMode = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_ADD_TO_PATH: 4,
  STROKE_ADD_TO_PATH: 5,
  FILL_STROKE_ADD_TO_PATH: 6,
  ADD_TO_PATH: 7,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
};

var ImageKind = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
};

var AnnotationType = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
};

var AnnotationFlag = {
  INVISIBLE: 0x01,
  HIDDEN: 0x02,
  PRINT: 0x04,
  NOZOOM: 0x08,
  NOROTATE: 0x10,
  NOVIEW: 0x20,
  READONLY: 0x40,
  LOCKED: 0x80,
  TOGGLENOVIEW: 0x100,
  LOCKEDCONTENTS: 0x200
};

var AnnotationBorderStyleType = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
};

var StreamType = {
  UNKNOWN: 0,
  FLATE: 1,
  LZW: 2,
  DCT: 3,
  JPX: 4,
  JBIG: 5,
  A85: 6,
  AHX: 7,
  CCF: 8,
  RL: 9
};

var FontType = {
  UNKNOWN: 0,
  TYPE1: 1,
  TYPE1C: 2,
  CIDFONTTYPE0: 3,
  CIDFONTTYPE0C: 4,
  TRUETYPE: 5,
  CIDFONTTYPE2: 6,
  TYPE3: 7,
  OPENTYPE: 8,
  TYPE0: 9,
  MMTYPE1: 10
};

var VERBOSITY_LEVELS = {
  errors: 0,
  warnings: 1,
  infos: 5
};

// All the possible operations for an operator list.
var OPS = {
  // Intentionally start from 1 so it is easy to spot bad operators that will be
  // 0's.
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotations: 78,
  endAnnotations: 79,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintJpegXObject: 82,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91
};

var verbosity = VERBOSITY_LEVELS.warnings;

function setVerbosityLevel(level) {
  verbosity = level;
}

function getVerbosityLevel() {
  return verbosity;
}

// A notice for devs. These are good for things that are helpful to devs, such
// as warning that Workers were disabled, which is important to devs but not
// end users.
function info(msg) {
  if (verbosity >= VERBOSITY_LEVELS.infos) {
    console.log('Info: ' + msg);
  }
}

// Non-fatal warnings.
function warn(msg) {
  if (verbosity >= VERBOSITY_LEVELS.warnings) {
    console.log('Warning: ' + msg);
  }
}

// Deprecated API function -- display regardless of the PDFJS.verbosity setting.
function deprecated(details) {
  console.log('Deprecated API usage: ' + details);
}

// Fatal errors that should trigger the fallback UI and halt execution by
// throwing an exception.
function error(msg) {
  if (verbosity >= VERBOSITY_LEVELS.errors) {
    console.log('Error: ' + msg);
    console.log(backtrace());
  }
  throw new Error(msg);
}

function backtrace() {
  try {
    throw new Error();
  } catch (e) {
    return e.stack ? e.stack.split('\n').slice(2).join('\n') : '';
  }
}

function assert(cond, msg) {
  if (!cond) {
    error(msg);
  }
}

var UNSUPPORTED_FEATURES = {
  unknown: 'unknown',
  forms: 'forms',
  javaScript: 'javaScript',
  smask: 'smask',
  shadingPattern: 'shadingPattern',
  font: 'font'
};

// Checks if URLs have the same origin. For non-HTTP based URLs, returns false.
function isSameOrigin(baseUrl, otherUrl) {
  try {
    var base = new URL(baseUrl);
    if (!base.origin || base.origin === 'null') {
      return false; // non-HTTP url
    }
  } catch (e) {
    return false;
  }

  var other = new URL(otherUrl, base);
  return base.origin === other.origin;
}

// Validates if URL is safe and allowed, e.g. to avoid XSS.
function isValidUrl(url, allowRelative) {
  if (!url || typeof url !== 'string') {
    return false;
  }
  // RFC 3986 (http://tools.ietf.org/html/rfc3986#section-3.1)
  // scheme = ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
  var protocol = /^[a-z][a-z0-9+\-.]*(?=:)/i.exec(url);
  if (!protocol) {
    return allowRelative;
  }
  protocol = protocol[0].toLowerCase();
  switch (protocol) {
    case 'http':
    case 'https':
    case 'ftp':
    case 'mailto':
    case 'tel':
      return true;
    default:
      return false;
  }
}

function shadow(obj, prop, value) {
  Object.defineProperty(obj, prop, { value: value,
                                     enumerable: true,
                                     configurable: true,
                                     writable: false });
  return value;
}

function getLookupTableFactory(initializer) {
  var lookup;
  return function () {
    if (initializer) {
      lookup = Object.create(null);
      initializer(lookup);
      initializer = null;
    }
    return lookup;
  };
}

var PasswordResponses = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};

var PasswordException = (function PasswordExceptionClosure() {
  function PasswordException(msg, code) {
    this.name = 'PasswordException';
    this.message = msg;
    this.code = code;
  }

  PasswordException.prototype = new Error();
  PasswordException.constructor = PasswordException;

  return PasswordException;
})();

var UnknownErrorException = (function UnknownErrorExceptionClosure() {
  function UnknownErrorException(msg, details) {
    this.name = 'UnknownErrorException';
    this.message = msg;
    this.details = details;
  }

  UnknownErrorException.prototype = new Error();
  UnknownErrorException.constructor = UnknownErrorException;

  return UnknownErrorException;
})();

var InvalidPDFException = (function InvalidPDFExceptionClosure() {
  function InvalidPDFException(msg) {
    this.name = 'InvalidPDFException';
    this.message = msg;
  }

  InvalidPDFException.prototype = new Error();
  InvalidPDFException.constructor = InvalidPDFException;

  return InvalidPDFException;
})();

var MissingPDFException = (function MissingPDFExceptionClosure() {
  function MissingPDFException(msg) {
    this.name = 'MissingPDFException';
    this.message = msg;
  }

  MissingPDFException.prototype = new Error();
  MissingPDFException.constructor = MissingPDFException;

  return MissingPDFException;
})();

var UnexpectedResponseException =
    (function UnexpectedResponseExceptionClosure() {
  function UnexpectedResponseException(msg, status) {
    this.name = 'UnexpectedResponseException';
    this.message = msg;
    this.status = status;
  }

  UnexpectedResponseException.prototype = new Error();
  UnexpectedResponseException.constructor = UnexpectedResponseException;

  return UnexpectedResponseException;
})();

var NotImplementedException = (function NotImplementedExceptionClosure() {
  function NotImplementedException(msg) {
    this.message = msg;
  }

  NotImplementedException.prototype = new Error();
  NotImplementedException.prototype.name = 'NotImplementedException';
  NotImplementedException.constructor = NotImplementedException;

  return NotImplementedException;
})();

var MissingDataException = (function MissingDataExceptionClosure() {
  function MissingDataException(begin, end) {
    this.begin = begin;
    this.end = end;
    this.message = 'Missing data [' + begin + ', ' + end + ')';
  }

  MissingDataException.prototype = new Error();
  MissingDataException.prototype.name = 'MissingDataException';
  MissingDataException.constructor = MissingDataException;

  return MissingDataException;
})();

var XRefParseException = (function XRefParseExceptionClosure() {
  function XRefParseException(msg) {
    this.message = msg;
  }

  XRefParseException.prototype = new Error();
  XRefParseException.prototype.name = 'XRefParseException';
  XRefParseException.constructor = XRefParseException;

  return XRefParseException;
})();

var NullCharactersRegExp = /\x00/g;

function removeNullCharacters(str) {
  if (typeof str !== 'string') {
    warn('The argument for removeNullCharacters must be a string.');
    return str;
  }
  return str.replace(NullCharactersRegExp, '');
}

function bytesToString(bytes) {
  assert(bytes !== null && typeof bytes === 'object' &&
         bytes.length !== undefined, 'Invalid argument for bytesToString');
  var length = bytes.length;
  var MAX_ARGUMENT_COUNT = 8192;
  if (length < MAX_ARGUMENT_COUNT) {
    return String.fromCharCode.apply(null, bytes);
  }
  var strBuf = [];
  for (var i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
    var chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
    var chunk = bytes.subarray(i, chunkEnd);
    strBuf.push(String.fromCharCode.apply(null, chunk));
  }
  return strBuf.join('');
}

function stringToBytes(str) {
  assert(typeof str === 'string', 'Invalid argument for stringToBytes');
  var length = str.length;
  var bytes = new Uint8Array(length);
  for (var i = 0; i < length; ++i) {
    bytes[i] = str.charCodeAt(i) & 0xFF;
  }
  return bytes;
}

/**
 * Gets length of the array (Array, Uint8Array, or string) in bytes.
 * @param {Array|Uint8Array|string} arr
 * @returns {number}
 */
function arrayByteLength(arr) {
  if (arr.length !== undefined) {
    return arr.length;
  }
  assert(arr.byteLength !== undefined);
  return arr.byteLength;
}

/**
 * Combines array items (arrays) into single Uint8Array object.
 * @param {Array} arr - the array of the arrays (Array, Uint8Array, or string).
 * @returns {Uint8Array}
 */
function arraysToBytes(arr) {
  // Shortcut: if first and only item is Uint8Array, return it.
  if (arr.length === 1 && (arr[0] instanceof Uint8Array)) {
    return arr[0];
  }
  var resultLength = 0;
  var i, ii = arr.length;
  var item, itemLength ;
  for (i = 0; i < ii; i++) {
    item = arr[i];
    itemLength = arrayByteLength(item);
    resultLength += itemLength;
  }
  var pos = 0;
  var data = new Uint8Array(resultLength);
  for (i = 0; i < ii; i++) {
    item = arr[i];
    if (!(item instanceof Uint8Array)) {
      if (typeof item === 'string') {
        item = stringToBytes(item);
      } else {
        item = new Uint8Array(item);
      }
    }
    itemLength = item.byteLength;
    data.set(item, pos);
    pos += itemLength;
  }
  return data;
}

function string32(value) {
  return String.fromCharCode((value >> 24) & 0xff, (value >> 16) & 0xff,
                             (value >> 8) & 0xff, value & 0xff);
}

function log2(x) {
  var n = 1, i = 0;
  while (x > n) {
    n <<= 1;
    i++;
  }
  return i;
}

function readInt8(data, start) {
  return (data[start] << 24) >> 24;
}

function readUint16(data, offset) {
  return (data[offset] << 8) | data[offset + 1];
}

function readUint32(data, offset) {
  return ((data[offset] << 24) | (data[offset + 1] << 16) |
         (data[offset + 2] << 8) | data[offset + 3]) >>> 0;
}

// Lazy test the endianness of the platform
// NOTE: This will be 'true' for simulated TypedArrays
function isLittleEndian() {
  var buffer8 = new Uint8Array(2);
  buffer8[0] = 1;
  var buffer16 = new Uint16Array(buffer8.buffer);
  return (buffer16[0] === 1);
}

// Checks if it's possible to eval JS expressions.
function isEvalSupported() {
  try {
    /* jshint evil: true */
    new Function('');
    return true;
  } catch (e) {
    return false;
  }
}

var Uint32ArrayView = (function Uint32ArrayViewClosure() {

  function Uint32ArrayView(buffer, length) {
    this.buffer = buffer;
    this.byteLength = buffer.length;
    this.length = length === undefined ? (this.byteLength >> 2) : length;
    ensureUint32ArrayViewProps(this.length);
  }
  Uint32ArrayView.prototype = Object.create(null);

  var uint32ArrayViewSetters = 0;
  function createUint32ArrayProp(index) {
    return {
      get: function () {
        var buffer = this.buffer, offset = index << 2;
        return (buffer[offset] | (buffer[offset + 1] << 8) |
          (buffer[offset + 2] << 16) | (buffer[offset + 3] << 24)) >>> 0;
      },
      set: function (value) {
        var buffer = this.buffer, offset = index << 2;
        buffer[offset] = value & 255;
        buffer[offset + 1] = (value >> 8) & 255;
        buffer[offset + 2] = (value >> 16) & 255;
        buffer[offset + 3] = (value >>> 24) & 255;
      }
    };
  }

  function ensureUint32ArrayViewProps(length) {
    while (uint32ArrayViewSetters < length) {
      Object.defineProperty(Uint32ArrayView.prototype,
        uint32ArrayViewSetters,
        createUint32ArrayProp(uint32ArrayViewSetters));
      uint32ArrayViewSetters++;
    }
  }

  return Uint32ArrayView;
})();

exports.Uint32ArrayView = Uint32ArrayView;

var IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];

var Util = (function UtilClosure() {
  function Util() {}

  var rgbBuf = ['rgb(', 0, ',', 0, ',', 0, ')'];

  // makeCssRgb() can be called thousands of times. Using |rgbBuf| avoids
  // creating many intermediate strings.
  Util.makeCssRgb = function Util_makeCssRgb(r, g, b) {
    rgbBuf[1] = r;
    rgbBuf[3] = g;
    rgbBuf[5] = b;
    return rgbBuf.join('');
  };

  // Concatenates two transformation matrices together and returns the result.
  Util.transform = function Util_transform(m1, m2) {
    return [
      m1[0] * m2[0] + m1[2] * m2[1],
      m1[1] * m2[0] + m1[3] * m2[1],
      m1[0] * m2[2] + m1[2] * m2[3],
      m1[1] * m2[2] + m1[3] * m2[3],
      m1[0] * m2[4] + m1[2] * m2[5] + m1[4],
      m1[1] * m2[4] + m1[3] * m2[5] + m1[5]
    ];
  };

  // For 2d affine transforms
  Util.applyTransform = function Util_applyTransform(p, m) {
    var xt = p[0] * m[0] + p[1] * m[2] + m[4];
    var yt = p[0] * m[1] + p[1] * m[3] + m[5];
    return [xt, yt];
  };

  Util.applyInverseTransform = function Util_applyInverseTransform(p, m) {
    var d = m[0] * m[3] - m[1] * m[2];
    var xt = (p[0] * m[3] - p[1] * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
    var yt = (-p[0] * m[1] + p[1] * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
    return [xt, yt];
  };

  // Applies the transform to the rectangle and finds the minimum axially
  // aligned bounding box.
  Util.getAxialAlignedBoundingBox =
    function Util_getAxialAlignedBoundingBox(r, m) {

    var p1 = Util.applyTransform(r, m);
    var p2 = Util.applyTransform(r.slice(2, 4), m);
    var p3 = Util.applyTransform([r[0], r[3]], m);
    var p4 = Util.applyTransform([r[2], r[1]], m);
    return [
      Math.min(p1[0], p2[0], p3[0], p4[0]),
      Math.min(p1[1], p2[1], p3[1], p4[1]),
      Math.max(p1[0], p2[0], p3[0], p4[0]),
      Math.max(p1[1], p2[1], p3[1], p4[1])
    ];
  };

  Util.inverseTransform = function Util_inverseTransform(m) {
    var d = m[0] * m[3] - m[1] * m[2];
    return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d,
      (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
  };

  // Apply a generic 3d matrix M on a 3-vector v:
  //   | a b c |   | X |
  //   | d e f | x | Y |
  //   | g h i |   | Z |
  // M is assumed to be serialized as [a,b,c,d,e,f,g,h,i],
  // with v as [X,Y,Z]
  Util.apply3dTransform = function Util_apply3dTransform(m, v) {
    return [
      m[0] * v[0] + m[1] * v[1] + m[2] * v[2],
      m[3] * v[0] + m[4] * v[1] + m[5] * v[2],
      m[6] * v[0] + m[7] * v[1] + m[8] * v[2]
    ];
  };

  // This calculation uses Singular Value Decomposition.
  // The SVD can be represented with formula A = USV. We are interested in the
  // matrix S here because it represents the scale values.
  Util.singularValueDecompose2dScale =
    function Util_singularValueDecompose2dScale(m) {

    var transpose = [m[0], m[2], m[1], m[3]];

    // Multiply matrix m with its transpose.
    var a = m[0] * transpose[0] + m[1] * transpose[2];
    var b = m[0] * transpose[1] + m[1] * transpose[3];
    var c = m[2] * transpose[0] + m[3] * transpose[2];
    var d = m[2] * transpose[1] + m[3] * transpose[3];

    // Solve the second degree polynomial to get roots.
    var first = (a + d) / 2;
    var second = Math.sqrt((a + d) * (a + d) - 4 * (a * d - c * b)) / 2;
    var sx = first + second || 1;
    var sy = first - second || 1;

    // Scale values are the square roots of the eigenvalues.
    return [Math.sqrt(sx), Math.sqrt(sy)];
  };

  // Normalize rectangle rect=[x1, y1, x2, y2] so that (x1,y1) < (x2,y2)
  // For coordinate systems whose origin lies in the bottom-left, this
  // means normalization to (BL,TR) ordering. For systems with origin in the
  // top-left, this means (TL,BR) ordering.
  Util.normalizeRect = function Util_normalizeRect(rect) {
    var r = rect.slice(0); // clone rect
    if (rect[0] > rect[2]) {
      r[0] = rect[2];
      r[2] = rect[0];
    }
    if (rect[1] > rect[3]) {
      r[1] = rect[3];
      r[3] = rect[1];
    }
    return r;
  };

  // Returns a rectangle [x1, y1, x2, y2] corresponding to the
  // intersection of rect1 and rect2. If no intersection, returns 'false'
  // The rectangle coordinates of rect1, rect2 should be [x1, y1, x2, y2]
  Util.intersect = function Util_intersect(rect1, rect2) {
    function compare(a, b) {
      return a - b;
    }

    // Order points along the axes
    var orderedX = [rect1[0], rect1[2], rect2[0], rect2[2]].sort(compare),
        orderedY = [rect1[1], rect1[3], rect2[1], rect2[3]].sort(compare),
        result = [];

    rect1 = Util.normalizeRect(rect1);
    rect2 = Util.normalizeRect(rect2);

    // X: first and second points belong to different rectangles?
    if ((orderedX[0] === rect1[0] && orderedX[1] === rect2[0]) ||
        (orderedX[0] === rect2[0] && orderedX[1] === rect1[0])) {
      // Intersection must be between second and third points
      result[0] = orderedX[1];
      result[2] = orderedX[2];
    } else {
      return false;
    }

    // Y: first and second points belong to different rectangles?
    if ((orderedY[0] === rect1[1] && orderedY[1] === rect2[1]) ||
        (orderedY[0] === rect2[1] && orderedY[1] === rect1[1])) {
      // Intersection must be between second and third points
      result[1] = orderedY[1];
      result[3] = orderedY[2];
    } else {
      return false;
    }

    return result;
  };

  Util.sign = function Util_sign(num) {
    return num < 0 ? -1 : 1;
  };

  var ROMAN_NUMBER_MAP = [
    '', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',
    '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
    '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'
  ];
  /**
   * Converts positive integers to (upper case) Roman numerals.
   * @param {integer} number - The number that should be converted.
   * @param {boolean} lowerCase - Indicates if the result should be converted
   *   to lower case letters. The default is false.
   * @return {string} The resulting Roman number.
   */
  Util.toRoman = function Util_toRoman(number, lowerCase) {
    assert(isInt(number) && number > 0,
           'The number should be a positive integer.');
    var pos, romanBuf = [];
    // Thousands
    while (number >= 1000) {
      number -= 1000;
      romanBuf.push('M');
    }
    // Hundreds
    pos = (number / 100) | 0;
    number %= 100;
    romanBuf.push(ROMAN_NUMBER_MAP[pos]);
    // Tens
    pos = (number / 10) | 0;
    number %= 10;
    romanBuf.push(ROMAN_NUMBER_MAP[10 + pos]);
    // Ones
    romanBuf.push(ROMAN_NUMBER_MAP[20 + number]);

    var romanStr = romanBuf.join('');
    return (lowerCase ? romanStr.toLowerCase() : romanStr);
  };

  Util.appendToArray = function Util_appendToArray(arr1, arr2) {
    Array.prototype.push.apply(arr1, arr2);
  };

  Util.prependToArray = function Util_prependToArray(arr1, arr2) {
    Array.prototype.unshift.apply(arr1, arr2);
  };

  Util.extendObj = function extendObj(obj1, obj2) {
    for (var key in obj2) {
      obj1[key] = obj2[key];
    }
  };

  Util.getInheritableProperty = function Util_getInheritableProperty(dict,
                                                                     name) {
    while (dict && !dict.has(name)) {
      dict = dict.get('Parent');
    }
    if (!dict) {
      return null;
    }
    return dict.get(name);
  };

  Util.inherit = function Util_inherit(sub, base, prototype) {
    sub.prototype = Object.create(base.prototype);
    sub.prototype.constructor = sub;
    for (var prop in prototype) {
      sub.prototype[prop] = prototype[prop];
    }
  };

  Util.loadScript = function Util_loadScript(src, callback) {
    var script = document.createElement('script');
    var loaded = false;
    script.setAttribute('src', src);
    if (callback) {
      script.onload = function() {
        if (!loaded) {
          callback();
        }
        loaded = true;
      };
    }
    document.getElementsByTagName('head')[0].appendChild(script);
  };

  return Util;
})();

/**
 * PDF page viewport created based on scale, rotation and offset.
 * @class
 * @alias PageViewport
 */
var PageViewport = (function PageViewportClosure() {
  /**
   * @constructor
   * @private
   * @param viewBox {Array} xMin, yMin, xMax and yMax coordinates.
   * @param scale {number} scale of the viewport.
   * @param rotation {number} rotations of the viewport in degrees.
   * @param offsetX {number} offset X
   * @param offsetY {number} offset Y
   * @param dontFlip {boolean} if true, axis Y will not be flipped.
   */
  function PageViewport(viewBox, scale, rotation, offsetX, offsetY, dontFlip) {
    this.viewBox = viewBox;
    this.scale = scale;
    this.rotation = rotation;
    this.offsetX = offsetX;
    this.offsetY = offsetY;

    // creating transform to convert pdf coordinate system to the normal
    // canvas like coordinates taking in account scale and rotation
    var centerX = (viewBox[2] + viewBox[0]) / 2;
    var centerY = (viewBox[3] + viewBox[1]) / 2;
    var rotateA, rotateB, rotateC, rotateD;
    rotation = rotation % 360;
    rotation = rotation < 0 ? rotation + 360 : rotation;
    switch (rotation) {
      case 180:
        rotateA = -1; rotateB = 0; rotateC = 0; rotateD = 1;
        break;
      case 90:
        rotateA = 0; rotateB = 1; rotateC = 1; rotateD = 0;
        break;
      case 270:
        rotateA = 0; rotateB = -1; rotateC = -1; rotateD = 0;
        break;
      //case 0:
      default:
        rotateA = 1; rotateB = 0; rotateC = 0; rotateD = -1;
        break;
    }

    if (dontFlip) {
      rotateC = -rotateC; rotateD = -rotateD;
    }

    var offsetCanvasX, offsetCanvasY;
    var width, height;
    if (rotateA === 0) {
      offsetCanvasX = Math.abs(centerY - viewBox[1]) * scale + offsetX;
      offsetCanvasY = Math.abs(centerX - viewBox[0]) * scale + offsetY;
      width = Math.abs(viewBox[3] - viewBox[1]) * scale;
      height = Math.abs(viewBox[2] - viewBox[0]) * scale;
    } else {
      offsetCanvasX = Math.abs(centerX - viewBox[0]) * scale + offsetX;
      offsetCanvasY = Math.abs(centerY - viewBox[1]) * scale + offsetY;
      width = Math.abs(viewBox[2] - viewBox[0]) * scale;
      height = Math.abs(viewBox[3] - viewBox[1]) * scale;
    }
    // creating transform for the following operations:
    // translate(-centerX, -centerY), rotate and flip vertically,
    // scale, and translate(offsetCanvasX, offsetCanvasY)
    this.transform = [
      rotateA * scale,
      rotateB * scale,
      rotateC * scale,
      rotateD * scale,
      offsetCanvasX - rotateA * scale * centerX - rotateC * scale * centerY,
      offsetCanvasY - rotateB * scale * centerX - rotateD * scale * centerY
    ];

    this.width = width;
    this.height = height;
    this.fontScale = scale;
  }
  PageViewport.prototype = /** @lends PageViewport.prototype */ {
    /**
     * Clones viewport with additional properties.
     * @param args {Object} (optional) If specified, may contain the 'scale' or
     * 'rotation' properties to override the corresponding properties in
     * the cloned viewport.
     * @returns {PageViewport} Cloned viewport.
     */
    clone: function PageViewPort_clone(args) {
      args = args || {};
      var scale = 'scale' in args ? args.scale : this.scale;
      var rotation = 'rotation' in args ? args.rotation : this.rotation;
      return new PageViewport(this.viewBox.slice(), scale, rotation,
                              this.offsetX, this.offsetY, args.dontFlip);
    },
    /**
     * Converts PDF point to the viewport coordinates. For examples, useful for
     * converting PDF location into canvas pixel coordinates.
     * @param x {number} X coordinate.
     * @param y {number} Y coordinate.
     * @returns {Object} Object that contains 'x' and 'y' properties of the
     * point in the viewport coordinate space.
     * @see {@link convertToPdfPoint}
     * @see {@link convertToViewportRectangle}
     */
    convertToViewportPoint: function PageViewport_convertToViewportPoint(x, y) {
      return Util.applyTransform([x, y], this.transform);
    },
    /**
     * Converts PDF rectangle to the viewport coordinates.
     * @param rect {Array} xMin, yMin, xMax and yMax coordinates.
     * @returns {Array} Contains corresponding coordinates of the rectangle
     * in the viewport coordinate space.
     * @see {@link convertToViewportPoint}
     */
    convertToViewportRectangle:
      function PageViewport_convertToViewportRectangle(rect) {
      var tl = Util.applyTransform([rect[0], rect[1]], this.transform);
      var br = Util.applyTransform([rect[2], rect[3]], this.transform);
      return [tl[0], tl[1], br[0], br[1]];
    },
    /**
     * Converts viewport coordinates to the PDF location. For examples, useful
     * for converting canvas pixel location into PDF one.
     * @param x {number} X coordinate.
     * @param y {number} Y coordinate.
     * @returns {Object} Object that contains 'x' and 'y' properties of the
     * point in the PDF coordinate space.
     * @see {@link convertToViewportPoint}
     */
    convertToPdfPoint: function PageViewport_convertToPdfPoint(x, y) {
      return Util.applyInverseTransform([x, y], this.transform);
    }
  };
  return PageViewport;
})();

var PDFStringTranslateTable = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0x2D8, 0x2C7, 0x2C6, 0x2D9, 0x2DD, 0x2DB, 0x2DA, 0x2DC, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2022, 0x2020, 0x2021, 0x2026, 0x2014,
  0x2013, 0x192, 0x2044, 0x2039, 0x203A, 0x2212, 0x2030, 0x201E, 0x201C,
  0x201D, 0x2018, 0x2019, 0x201A, 0x2122, 0xFB01, 0xFB02, 0x141, 0x152, 0x160,
  0x178, 0x17D, 0x131, 0x142, 0x153, 0x161, 0x17E, 0, 0x20AC
];

function stringToPDFString(str) {
  var i, n = str.length, strBuf = [];
  if (str[0] === '\xFE' && str[1] === '\xFF') {
    // UTF16BE BOM
    for (i = 2; i < n; i += 2) {
      strBuf.push(String.fromCharCode(
        (str.charCodeAt(i) << 8) | str.charCodeAt(i + 1)));
    }
  } else {
    for (i = 0; i < n; ++i) {
      var code = PDFStringTranslateTable[str.charCodeAt(i)];
      strBuf.push(code ? String.fromCharCode(code) : str.charAt(i));
    }
  }
  return strBuf.join('');
}

function stringToUTF8String(str) {
  return decodeURIComponent(escape(str));
}

function utf8StringToString(str) {
  return unescape(encodeURIComponent(str));
}

function isEmptyObj(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

function isBool(v) {
  return typeof v === 'boolean';
}

function isInt(v) {
  return typeof v === 'number' && ((v | 0) === v);
}

function isNum(v) {
  return typeof v === 'number';
}

function isString(v) {
  return typeof v === 'string';
}

function isArray(v) {
  return v instanceof Array;
}

function isArrayBuffer(v) {
  return typeof v === 'object' && v !== null && v.byteLength !== undefined;
}

// Checks if ch is one of the following characters: SPACE, TAB, CR or LF.
function isSpace(ch) {
  return (ch === 0x20 || ch === 0x09 || ch === 0x0D || ch === 0x0A);
}

/**
 * Promise Capability object.
 *
 * @typedef {Object} PromiseCapability
 * @property {Promise} promise - A promise object.
 * @property {function} resolve - Fulfills the promise.
 * @property {function} reject - Rejects the promise.
 */

/**
 * Creates a promise capability object.
 * @alias createPromiseCapability
 *
 * @return {PromiseCapability} A capability object contains:
 * - a Promise, resolve and reject methods.
 */
function createPromiseCapability() {
  var capability = {};
  capability.promise = new Promise(function (resolve, reject) {
    capability.resolve = resolve;
    capability.reject = reject;
  });
  return capability;
}

/**
 * Polyfill for Promises:
 * The following promise implementation tries to generally implement the
 * Promise/A+ spec. Some notable differences from other promise libraries are:
 * - There currently isn't a separate deferred and promise object.
 * - Unhandled rejections eventually show an error if they aren't handled.
 *
 * Based off of the work in:
 * https://bugzilla.mozilla.org/show_bug.cgi?id=810490
 */
(function PromiseClosure() {
  if (globalScope.Promise) {
    // Promises existing in the DOM/Worker, checking presence of all/resolve
    if (typeof globalScope.Promise.all !== 'function') {
      globalScope.Promise.all = function (iterable) {
        var count = 0, results = [], resolve, reject;
        var promise = new globalScope.Promise(function (resolve_, reject_) {
          resolve = resolve_;
          reject = reject_;
        });
        iterable.forEach(function (p, i) {
          count++;
          p.then(function (result) {
            results[i] = result;
            count--;
            if (count === 0) {
              resolve(results);
            }
          }, reject);
        });
        if (count === 0) {
          resolve(results);
        }
        return promise;
      };
    }
    if (typeof globalScope.Promise.resolve !== 'function') {
      globalScope.Promise.resolve = function (value) {
        return new globalScope.Promise(function (resolve) { resolve(value); });
      };
    }
    if (typeof globalScope.Promise.reject !== 'function') {
      globalScope.Promise.reject = function (reason) {
        return new globalScope.Promise(function (resolve, reject) {
          reject(reason);
        });
      };
    }
    if (typeof globalScope.Promise.prototype.catch !== 'function') {
      globalScope.Promise.prototype.catch = function (onReject) {
        return globalScope.Promise.prototype.then(undefined, onReject);
      };
    }
    return;
  }
  var STATUS_PENDING = 0;
  var STATUS_RESOLVED = 1;
  var STATUS_REJECTED = 2;

  // In an attempt to avoid silent exceptions, unhandled rejections are
  // tracked and if they aren't handled in a certain amount of time an
  // error is logged.
  var REJECTION_TIMEOUT = 500;

  var HandlerManager = {
    handlers: [],
    running: false,
    unhandledRejections: [],
    pendingRejectionCheck: false,

    scheduleHandlers: function scheduleHandlers(promise) {
      if (promise._status === STATUS_PENDING) {
        return;
      }

      this.handlers = this.handlers.concat(promise._handlers);
      promise._handlers = [];

      if (this.running) {
        return;
      }
      this.running = true;

      setTimeout(this.runHandlers.bind(this), 0);
    },

    runHandlers: function runHandlers() {
      var RUN_TIMEOUT = 1; // ms
      var timeoutAt = Date.now() + RUN_TIMEOUT;
      while (this.handlers.length > 0) {
        var handler = this.handlers.shift();

        var nextStatus = handler.thisPromise._status;
        var nextValue = handler.thisPromise._value;

        try {
          if (nextStatus === STATUS_RESOLVED) {
            if (typeof handler.onResolve === 'function') {
              nextValue = handler.onResolve(nextValue);
            }
          } else if (typeof handler.onReject === 'function') {
              nextValue = handler.onReject(nextValue);
              nextStatus = STATUS_RESOLVED;

              if (handler.thisPromise._unhandledRejection) {
                this.removeUnhandeledRejection(handler.thisPromise);
              }
          }
        } catch (ex) {
          nextStatus = STATUS_REJECTED;
          nextValue = ex;
        }

        handler.nextPromise._updateStatus(nextStatus, nextValue);
        if (Date.now() >= timeoutAt) {
          break;
        }
      }

      if (this.handlers.length > 0) {
        setTimeout(this.runHandlers.bind(this), 0);
        return;
      }

      this.running = false;
    },

    addUnhandledRejection: function addUnhandledRejection(promise) {
      this.unhandledRejections.push({
        promise: promise,
        time: Date.now()
      });
      this.scheduleRejectionCheck();
    },

    removeUnhandeledRejection: function removeUnhandeledRejection(promise) {
      promise._unhandledRejection = false;
      for (var i = 0; i < this.unhandledRejections.length; i++) {
        if (this.unhandledRejections[i].promise === promise) {
          this.unhandledRejections.splice(i);
          i--;
        }
      }
    },

    scheduleRejectionCheck: function scheduleRejectionCheck() {
      if (this.pendingRejectionCheck) {
        return;
      }
      this.pendingRejectionCheck = true;
      setTimeout(function rejectionCheck() {
        this.pendingRejectionCheck = false;
        var now = Date.now();
        for (var i = 0; i < this.unhandledRejections.length; i++) {
          if (now - this.unhandledRejections[i].time > REJECTION_TIMEOUT) {
            var unhandled = this.unhandledRejections[i].promise._value;
            var msg = 'Unhandled rejection: ' + unhandled;
            if (unhandled.stack) {
              msg += '\n' + unhandled.stack;
            }
            warn(msg);
            this.unhandledRejections.splice(i);
            i--;
          }
        }
        if (this.unhandledRejections.length) {
          this.scheduleRejectionCheck();
        }
      }.bind(this), REJECTION_TIMEOUT);
    }
  };

  function Promise(resolver) {
    this._status = STATUS_PENDING;
    this._handlers = [];
    try {
      resolver.call(this, this._resolve.bind(this), this._reject.bind(this));
    } catch (e) {
      this._reject(e);
    }
  }
  /**
   * Builds a promise that is resolved when all the passed in promises are
   * resolved.
   * @param {array} promises array of data and/or promises to wait for.
   * @return {Promise} New dependent promise.
   */
  Promise.all = function Promise_all(promises) {
    var resolveAll, rejectAll;
    var deferred = new Promise(function (resolve, reject) {
      resolveAll = resolve;
      rejectAll = reject;
    });
    var unresolved = promises.length;
    var results = [];
    if (unresolved === 0) {
      resolveAll(results);
      return deferred;
    }
    function reject(reason) {
      if (deferred._status === STATUS_REJECTED) {
        return;
      }
      results = [];
      rejectAll(reason);
    }
    for (var i = 0, ii = promises.length; i < ii; ++i) {
      var promise = promises[i];
      var resolve = (function(i) {
        return function(value) {
          if (deferred._status === STATUS_REJECTED) {
            return;
          }
          results[i] = value;
          unresolved--;
          if (unresolved === 0) {
            resolveAll(results);
          }
        };
      })(i);
      if (Promise.isPromise(promise)) {
        promise.then(resolve, reject);
      } else {
        resolve(promise);
      }
    }
    return deferred;
  };

  /**
   * Checks if the value is likely a promise (has a 'then' function).
   * @return {boolean} true if value is thenable
   */
  Promise.isPromise = function Promise_isPromise(value) {
    return value && typeof value.then === 'function';
  };

  /**
   * Creates resolved promise
   * @param value resolve value
   * @returns {Promise}
   */
  Promise.resolve = function Promise_resolve(value) {
    return new Promise(function (resolve) { resolve(value); });
  };

  /**
   * Creates rejected promise
   * @param reason rejection value
   * @returns {Promise}
   */
  Promise.reject = function Promise_reject(reason) {
    return new Promise(function (resolve, reject) { reject(reason); });
  };

  Promise.prototype = {
    _status: null,
    _value: null,
    _handlers: null,
    _unhandledRejection: null,

    _updateStatus: function Promise__updateStatus(status, value) {
      if (this._status === STATUS_RESOLVED ||
          this._status === STATUS_REJECTED) {
        return;
      }

      if (status === STATUS_RESOLVED &&
          Promise.isPromise(value)) {
        value.then(this._updateStatus.bind(this, STATUS_RESOLVED),
                   this._updateStatus.bind(this, STATUS_REJECTED));
        return;
      }

      this._status = status;
      this._value = value;

      if (status === STATUS_REJECTED && this._handlers.length === 0) {
        this._unhandledRejection = true;
        HandlerManager.addUnhandledRejection(this);
      }

      HandlerManager.scheduleHandlers(this);
    },

    _resolve: function Promise_resolve(value) {
      this._updateStatus(STATUS_RESOLVED, value);
    },

    _reject: function Promise_reject(reason) {
      this._updateStatus(STATUS_REJECTED, reason);
    },

    then: function Promise_then(onResolve, onReject) {
      var nextPromise = new Promise(function (resolve, reject) {
        this.resolve = resolve;
        this.reject = reject;
      });
      this._handlers.push({
        thisPromise: this,
        onResolve: onResolve,
        onReject: onReject,
        nextPromise: nextPromise
      });
      HandlerManager.scheduleHandlers(this);
      return nextPromise;
    },

    catch: function Promise_catch(onReject) {
      return this.then(undefined, onReject);
    }
  };

  globalScope.Promise = Promise;
})();

var StatTimer = (function StatTimerClosure() {
  function rpad(str, pad, length) {
    while (str.length < length) {
      str += pad;
    }
    return str;
  }
  function StatTimer() {
    this.started = Object.create(null);
    this.times = [];
    this.enabled = true;
  }
  StatTimer.prototype = {
    time: function StatTimer_time(name) {
      if (!this.enabled) {
        return;
      }
      if (name in this.started) {
        warn('Timer is already running for ' + name);
      }
      this.started[name] = Date.now();
    },
    timeEnd: function StatTimer_timeEnd(name) {
      if (!this.enabled) {
        return;
      }
      if (!(name in this.started)) {
        warn('Timer has not been started for ' + name);
      }
      this.times.push({
        'name': name,
        'start': this.started[name],
        'end': Date.now()
      });
      // Remove timer from started so it can be called again.
      delete this.started[name];
    },
    toString: function StatTimer_toString() {
      var i, ii;
      var times = this.times;
      var out = '';
      // Find the longest name for padding purposes.
      var longest = 0;
      for (i = 0, ii = times.length; i < ii; ++i) {
        var name = times[i]['name'];
        if (name.length > longest) {
          longest = name.length;
        }
      }
      for (i = 0, ii = times.length; i < ii; ++i) {
        var span = times[i];
        var duration = span.end - span.start;
        out += rpad(span['name'], ' ', longest) + ' ' + duration + 'ms\n';
      }
      return out;
    }
  };
  return StatTimer;
})();

var createBlob = function createBlob(data, contentType) {
  if (typeof Blob !== 'undefined') {
    return new Blob([data], { type: contentType });
  }
  warn('The "Blob" constructor is not supported.');
};

var createObjectURL = (function createObjectURLClosure() {
  // Blob/createObjectURL is not available, falling back to data schema.
  var digits =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  return function createObjectURL(data, contentType, forceDataSchema) {
    if (!forceDataSchema &&
        typeof URL !== 'undefined' && URL.createObjectURL) {
      var blob = createBlob(data, contentType);
      return URL.createObjectURL(blob);
    }

    var buffer = 'data:' + contentType + ';base64,';
    for (var i = 0, ii = data.length; i < ii; i += 3) {
      var b1 = data[i] & 0xFF;
      var b2 = data[i + 1] & 0xFF;
      var b3 = data[i + 2] & 0xFF;
      var d1 = b1 >> 2, d2 = ((b1 & 3) << 4) | (b2 >> 4);
      var d3 = i + 1 < ii ? ((b2 & 0xF) << 2) | (b3 >> 6) : 64;
      var d4 = i + 2 < ii ? (b3 & 0x3F) : 64;
      buffer += digits[d1] + digits[d2] + digits[d3] + digits[d4];
    }
    return buffer;
  };
})();

function MessageHandler(sourceName, targetName, comObj) {
  this.sourceName = sourceName;
  this.targetName = targetName;
  this.comObj = comObj;
  this.callbackIndex = 1;
  this.postMessageTransfers = true;
  var callbacksCapabilities = this.callbacksCapabilities = Object.create(null);
  var ah = this.actionHandler = Object.create(null);

  this._onComObjOnMessage = function messageHandlerComObjOnMessage(event) {
    var data = event.data;
    if (data.targetName !== this.sourceName) {
      return;
    }
    if (data.isReply) {
      var callbackId = data.callbackId;
      if (data.callbackId in callbacksCapabilities) {
        var callback = callbacksCapabilities[callbackId];
        delete callbacksCapabilities[callbackId];
        if ('error' in data) {
          callback.reject(data.error);
        } else {
          callback.resolve(data.data);
        }
      } else {
        error('Cannot resolve callback ' + callbackId);
      }
    } else if (data.action in ah) {
      var action = ah[data.action];
      if (data.callbackId) {
        var sourceName = this.sourceName;
        var targetName = data.sourceName;
        Promise.resolve().then(function () {
          return action[0].call(action[1], data.data);
        }).then(function (result) {
          comObj.postMessage({
            sourceName: sourceName,
            targetName: targetName,
            isReply: true,
            callbackId: data.callbackId,
            data: result
          });
        }, function (reason) {
          if (reason instanceof Error) {
            // Serialize error to avoid "DataCloneError"
            reason = reason + '';
          }
          comObj.postMessage({
            sourceName: sourceName,
            targetName: targetName,
            isReply: true,
            callbackId: data.callbackId,
            error: reason
          });
        });
      } else {
        action[0].call(action[1], data.data);
      }
    } else {
      error('Unknown action from worker: ' + data.action);
    }
  }.bind(this);
  comObj.addEventListener('message', this._onComObjOnMessage);
}

MessageHandler.prototype = {
  on: function messageHandlerOn(actionName, handler, scope) {
    var ah = this.actionHandler;
    if (ah[actionName]) {
      error('There is already an actionName called "' + actionName + '"');
    }
    ah[actionName] = [handler, scope];
  },
  /**
   * Sends a message to the comObj to invoke the action with the supplied data.
   * @param {String} actionName Action to call.
   * @param {JSON} data JSON data to send.
   * @param {Array} [transfers] Optional list of transfers/ArrayBuffers
   */
  send: function messageHandlerSend(actionName, data, transfers) {
    var message = {
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: actionName,
      data: data
    };
    this.postMessage(message, transfers);
  },
  /**
   * Sends a message to the comObj to invoke the action with the supplied data.
   * Expects that other side will callback with the response.
   * @param {String} actionName Action to call.
   * @param {JSON} data JSON data to send.
   * @param {Array} [transfers] Optional list of transfers/ArrayBuffers.
   * @returns {Promise} Promise to be resolved with response data.
   */
  sendWithPromise:
    function messageHandlerSendWithPromise(actionName, data, transfers) {
    var callbackId = this.callbackIndex++;
    var message = {
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: actionName,
      data: data,
      callbackId: callbackId
    };
    var capability = createPromiseCapability();
    this.callbacksCapabilities[callbackId] = capability;
    try {
      this.postMessage(message, transfers);
    } catch (e) {
      capability.reject(e);
    }
    return capability.promise;
  },
  /**
   * Sends raw message to the comObj.
   * @private
   * @param message {Object} Raw message.
   * @param transfers List of transfers/ArrayBuffers, or undefined.
   */
  postMessage: function (message, transfers) {
    if (transfers && this.postMessageTransfers) {
      this.comObj.postMessage(message, transfers);
    } else {
      this.comObj.postMessage(message);
    }
  },

  destroy: function () {
    this.comObj.removeEventListener('message', this._onComObjOnMessage);
  }
};

function loadJpegStream(id, imageUrl, objs) {
  var img = new Image();
  img.onload = (function loadJpegStream_onloadClosure() {
    objs.resolve(id, img);
  });
  img.onerror = (function loadJpegStream_onerrorClosure() {
    objs.resolve(id, null);
    warn('Error during JPEG image loading');
  });
  img.src = imageUrl;
}

  // Polyfill from https://github.com/Polymer/URL
/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/publicdomain/zero/1.0/ */
(function checkURLConstructor(scope) {
  /* jshint ignore:start */

  // feature detect for URL constructor
  var hasWorkingUrl = false;
  try {
    if (typeof URL === 'function' &&
        typeof URL.prototype === 'object' &&
        ('origin' in URL.prototype)) {
      var u = new URL('b', 'http://a');
      u.pathname = 'c%20d';
      hasWorkingUrl = u.href === 'http://a/c%20d';
    }
  } catch(e) { }

  if (hasWorkingUrl)
    return;

  var relative = Object.create(null);
  relative['ftp'] = 21;
  relative['file'] = 0;
  relative['gopher'] = 70;
  relative['http'] = 80;
  relative['https'] = 443;
  relative['ws'] = 80;
  relative['wss'] = 443;

  var relativePathDotMapping = Object.create(null);
  relativePathDotMapping['%2e'] = '.';
  relativePathDotMapping['.%2e'] = '..';
  relativePathDotMapping['%2e.'] = '..';
  relativePathDotMapping['%2e%2e'] = '..';

  function isRelativeScheme(scheme) {
    return relative[scheme] !== undefined;
  }

  function invalid() {
    clear.call(this);
    this._isInvalid = true;
  }

  function IDNAToASCII(h) {
    if ('' == h) {
      invalid.call(this)
    }
    // XXX
    return h.toLowerCase()
  }

  function percentEscape(c) {
    var unicode = c.charCodeAt(0);
    if (unicode > 0x20 &&
       unicode < 0x7F &&
       // " # < > ? `
       [0x22, 0x23, 0x3C, 0x3E, 0x3F, 0x60].indexOf(unicode) == -1
      ) {
      return c;
    }
    return encodeURIComponent(c);
  }

  function percentEscapeQuery(c) {
    // XXX This actually needs to encode c using encoding and then
    // convert the bytes one-by-one.

    var unicode = c.charCodeAt(0);
    if (unicode > 0x20 &&
       unicode < 0x7F &&
       // " # < > ` (do not escape '?')
       [0x22, 0x23, 0x3C, 0x3E, 0x60].indexOf(unicode) == -1
      ) {
      return c;
    }
    return encodeURIComponent(c);
  }

  var EOF = undefined,
      ALPHA = /[a-zA-Z]/,
      ALPHANUMERIC = /[a-zA-Z0-9\+\-\.]/;

  function parse(input, stateOverride, base) {
    function err(message) {
      errors.push(message)
    }

    var state = stateOverride || 'scheme start',
        cursor = 0,
        buffer = '',
        seenAt = false,
        seenBracket = false,
        errors = [];

    loop: while ((input[cursor - 1] != EOF || cursor == 0) && !this._isInvalid) {
      var c = input[cursor];
      switch (state) {
        case 'scheme start':
          if (c && ALPHA.test(c)) {
            buffer += c.toLowerCase(); // ASCII-safe
            state = 'scheme';
          } else if (!stateOverride) {
            buffer = '';
            state = 'no scheme';
            continue;
          } else {
            err('Invalid scheme.');
            break loop;
          }
          break;

        case 'scheme':
          if (c && ALPHANUMERIC.test(c)) {
            buffer += c.toLowerCase(); // ASCII-safe
          } else if (':' == c) {
            this._scheme = buffer;
            buffer = '';
            if (stateOverride) {
              break loop;
            }
            if (isRelativeScheme(this._scheme)) {
              this._isRelative = true;
            }
            if ('file' == this._scheme) {
              state = 'relative';
            } else if (this._isRelative && base && base._scheme == this._scheme) {
              state = 'relative or authority';
            } else if (this._isRelative) {
              state = 'authority first slash';
            } else {
              state = 'scheme data';
            }
          } else if (!stateOverride) {
            buffer = '';
            cursor = 0;
            state = 'no scheme';
            continue;
          } else if (EOF == c) {
            break loop;
          } else {
            err('Code point not allowed in scheme: ' + c)
            break loop;
          }
          break;

        case 'scheme data':
          if ('?' == c) {
            this._query = '?';
            state = 'query';
          } else if ('#' == c) {
            this._fragment = '#';
            state = 'fragment';
          } else {
            // XXX error handling
            if (EOF != c && '\t' != c && '\n' != c && '\r' != c) {
              this._schemeData += percentEscape(c);
            }
          }
          break;

        case 'no scheme':
          if (!base || !(isRelativeScheme(base._scheme))) {
            err('Missing scheme.');
            invalid.call(this);
          } else {
            state = 'relative';
            continue;
          }
          break;

        case 'relative or authority':
          if ('/' == c && '/' == input[cursor+1]) {
            state = 'authority ignore slashes';
          } else {
            err('Expected /, got: ' + c);
            state = 'relative';
            continue
          }
          break;

        case 'relative':
          this._isRelative = true;
          if ('file' != this._scheme)
            this._scheme = base._scheme;
          if (EOF == c) {
            this._host = base._host;
            this._port = base._port;
            this._path = base._path.slice();
            this._query = base._query;
            this._username = base._username;
            this._password = base._password;
            break loop;
          } else if ('/' == c || '\\' == c) {
            if ('\\' == c)
              err('\\ is an invalid code point.');
            state = 'relative slash';
          } else if ('?' == c) {
            this._host = base._host;
            this._port = base._port;
            this._path = base._path.slice();
            this._query = '?';
            this._username = base._username;
            this._password = base._password;
            state = 'query';
          } else if ('#' == c) {
            this._host = base._host;
            this._port = base._port;
            this._path = base._path.slice();
            this._query = base._query;
            this._fragment = '#';
            this._username = base._username;
            this._password = base._password;
            state = 'fragment';
          } else {
            var nextC = input[cursor+1]
            var nextNextC = input[cursor+2]
            if (
              'file' != this._scheme || !ALPHA.test(c) ||
              (nextC != ':' && nextC != '|') ||
              (EOF != nextNextC && '/' != nextNextC && '\\' != nextNextC && '?' != nextNextC && '#' != nextNextC)) {
              this._host = base._host;
              this._port = base._port;
              this._username = base._username;
              this._password = base._password;
              this._path = base._path.slice();
              this._path.pop();
            }
            state = 'relative path';
            continue;
          }
          break;

        case 'relative slash':
          if ('/' == c || '\\' == c) {
            if ('\\' == c) {
              err('\\ is an invalid code point.');
            }
            if ('file' == this._scheme) {
              state = 'file host';
            } else {
              state = 'authority ignore slashes';
            }
          } else {
            if ('file' != this._scheme) {
              this._host = base._host;
              this._port = base._port;
              this._username = base._username;
              this._password = base._password;
            }
            state = 'relative path';
            continue;
          }
          break;

        case 'authority first slash':
          if ('/' == c) {
            state = 'authority second slash';
          } else {
            err("Expected '/', got: " + c);
            state = 'authority ignore slashes';
            continue;
          }
          break;

        case 'authority second slash':
          state = 'authority ignore slashes';
          if ('/' != c) {
            err("Expected '/', got: " + c);
            continue;
          }
          break;

        case 'authority ignore slashes':
          if ('/' != c && '\\' != c) {
            state = 'authority';
            continue;
          } else {
            err('Expected authority, got: ' + c);
          }
          break;

        case 'authority':
          if ('@' == c) {
            if (seenAt) {
              err('@ already seen.');
              buffer += '%40';
            }
            seenAt = true;
            for (var i = 0; i < buffer.length; i++) {
              var cp = buffer[i];
              if ('\t' == cp || '\n' == cp || '\r' == cp) {
                err('Invalid whitespace in authority.');
                continue;
              }
              // XXX check URL code points
              if (':' == cp && null === this._password) {
                this._password = '';
                continue;
              }
              var tempC = percentEscape(cp);
              (null !== this._password) ? this._password += tempC : this._username += tempC;
            }
            buffer = '';
          } else if (EOF == c || '/' == c || '\\' == c || '?' == c || '#' == c) {
            cursor -= buffer.length;
            buffer = '';
            state = 'host';
            continue;
          } else {
            buffer += c;
          }
          break;

        case 'file host':
          if (EOF == c || '/' == c || '\\' == c || '?' == c || '#' == c) {
            if (buffer.length == 2 && ALPHA.test(buffer[0]) && (buffer[1] == ':' || buffer[1] == '|')) {
              state = 'relative path';
            } else if (buffer.length == 0) {
              state = 'relative path start';
            } else {
              this._host = IDNAToASCII.call(this, buffer);
              buffer = '';
              state = 'relative path start';
            }
            continue;
          } else if ('\t' == c || '\n' == c || '\r' == c) {
            err('Invalid whitespace in file host.');
          } else {
            buffer += c;
          }
          break;

        case 'host':
        case 'hostname':
          if (':' == c && !seenBracket) {
            // XXX host parsing
            this._host = IDNAToASCII.call(this, buffer);
            buffer = '';
            state = 'port';
            if ('hostname' == stateOverride) {
              break loop;
            }
          } else if (EOF == c || '/' == c || '\\' == c || '?' == c || '#' == c) {
            this._host = IDNAToASCII.call(this, buffer);
            buffer = '';
            state = 'relative path start';
            if (stateOverride) {
              break loop;
            }
            continue;
          } else if ('\t' != c && '\n' != c && '\r' != c) {
            if ('[' == c) {
              seenBracket = true;
            } else if (']' == c) {
              seenBracket = false;
            }
            buffer += c;
          } else {
            err('Invalid code point in host/hostname: ' + c);
          }
          break;

        case 'port':
          if (/[0-9]/.test(c)) {
            buffer += c;
          } else if (EOF == c || '/' == c || '\\' == c || '?' == c || '#' == c || stateOverride) {
            if ('' != buffer) {
              var temp = parseInt(buffer, 10);
              if (temp != relative[this._scheme]) {
                this._port = temp + '';
              }
              buffer = '';
            }
            if (stateOverride) {
              break loop;
            }
            state = 'relative path start';
            continue;
          } else if ('\t' == c || '\n' == c || '\r' == c) {
            err('Invalid code point in port: ' + c);
          } else {
            invalid.call(this);
          }
          break;

        case 'relative path start':
          if ('\\' == c)
            err("'\\' not allowed in path.");
          state = 'relative path';
          if ('/' != c && '\\' != c) {
            continue;
          }
          break;

        case 'relative path':
          if (EOF == c || '/' == c || '\\' == c || (!stateOverride && ('?' == c || '#' == c))) {
            if ('\\' == c) {
              err('\\ not allowed in relative path.');
            }
            var tmp;
            if (tmp = relativePathDotMapping[buffer.toLowerCase()]) {
              buffer = tmp;
            }
            if ('..' == buffer) {
              this._path.pop();
              if ('/' != c && '\\' != c) {
                this._path.push('');
              }
            } else if ('.' == buffer && '/' != c && '\\' != c) {
              this._path.push('');
            } else if ('.' != buffer) {
              if ('file' == this._scheme && this._path.length == 0 && buffer.length == 2 && ALPHA.test(buffer[0]) && buffer[1] == '|') {
                buffer = buffer[0] + ':';
              }
              this._path.push(buffer);
            }
            buffer = '';
            if ('?' == c) {
              this._query = '?';
              state = 'query';
            } else if ('#' == c) {
              this._fragment = '#';
              state = 'fragment';
            }
          } else if ('\t' != c && '\n' != c && '\r' != c) {
            buffer += percentEscape(c);
          }
          break;

        case 'query':
          if (!stateOverride && '#' == c) {
            this._fragment = '#';
            state = 'fragment';
          } else if (EOF != c && '\t' != c && '\n' != c && '\r' != c) {
            this._query += percentEscapeQuery(c);
          }
          break;

        case 'fragment':
          if (EOF != c && '\t' != c && '\n' != c && '\r' != c) {
            this._fragment += c;
          }
          break;
      }

      cursor++;
    }
  }

  function clear() {
    this._scheme = '';
    this._schemeData = '';
    this._username = '';
    this._password = null;
    this._host = '';
    this._port = '';
    this._path = [];
    this._query = '';
    this._fragment = '';
    this._isInvalid = false;
    this._isRelative = false;
  }

  // Does not process domain names or IP addresses.
  // Does not handle encoding for the query parameter.
  function jURL(url, base /* , encoding */) {
    if (base !== undefined && !(base instanceof jURL))
      base = new jURL(String(base));

    this._url = url;
    clear.call(this);

    var input = url.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, '');
    // encoding = encoding || 'utf-8'

    parse.call(this, input, null, base);
  }

  jURL.prototype = {
    toString: function() {
      return this.href;
    },
    get href() {
      if (this._isInvalid)
        return this._url;

      var authority = '';
      if ('' != this._username || null != this._password) {
        authority = this._username +
            (null != this._password ? ':' + this._password : '') + '@';
      }

      return this.protocol +
          (this._isRelative ? '//' + authority + this.host : '') +
          this.pathname + this._query + this._fragment;
    },
    set href(href) {
      clear.call(this);
      parse.call(this, href);
    },

    get protocol() {
      return this._scheme + ':';
    },
    set protocol(protocol) {
      if (this._isInvalid)
        return;
      parse.call(this, protocol + ':', 'scheme start');
    },

    get host() {
      return this._isInvalid ? '' : this._port ?
          this._host + ':' + this._port : this._host;
    },
    set host(host) {
      if (this._isInvalid || !this._isRelative)
        return;
      parse.call(this, host, 'host');
    },

    get hostname() {
      return this._host;
    },
    set hostname(hostname) {
      if (this._isInvalid || !this._isRelative)
        return;
      parse.call(this, hostname, 'hostname');
    },

    get port() {
      return this._port;
    },
    set port(port) {
      if (this._isInvalid || !this._isRelative)
        return;
      parse.call(this, port, 'port');
    },

    get pathname() {
      return this._isInvalid ? '' : this._isRelative ?
          '/' + this._path.join('/') : this._schemeData;
    },
    set pathname(pathname) {
      if (this._isInvalid || !this._isRelative)
        return;
      this._path = [];
      parse.call(this, pathname, 'relative path start');
    },

    get search() {
      return this._isInvalid || !this._query || '?' == this._query ?
          '' : this._query;
    },
    set search(search) {
      if (this._isInvalid || !this._isRelative)
        return;
      this._query = '?';
      if ('?' == search[0])
        search = search.slice(1);
      parse.call(this, search, 'query');
    },

    get hash() {
      return this._isInvalid || !this._fragment || '#' == this._fragment ?
          '' : this._fragment;
    },
    set hash(hash) {
      if (this._isInvalid)
        return;
      this._fragment = '#';
      if ('#' == hash[0])
        hash = hash.slice(1);
      parse.call(this, hash, 'fragment');
    },

    get origin() {
      var host;
      if (this._isInvalid || !this._scheme) {
        return '';
      }
      // javascript: Gecko returns String(""), WebKit/Blink String("null")
      // Gecko throws error for "data://"
      // data: Gecko returns "", Blink returns "data://", WebKit returns "null"
      // Gecko returns String("") for file: mailto:
      // WebKit/Blink returns String("SCHEME://") for file: mailto:
      switch (this._scheme) {
        case 'data':
        case 'file':
        case 'javascript':
        case 'mailto':
          return 'null';
      }
      host = this.host;
      if (!host) {
        return '';
      }
      return this._scheme + '://' + host;
    }
  };

  // Copy over the static methods
  var OriginalURL = scope.URL;
  if (OriginalURL) {
    jURL.createObjectURL = function(blob) {
      // IE extension allows a second optional options argument.
      // http://msdn.microsoft.com/en-us/library/ie/hh772302(v=vs.85).aspx
      return OriginalURL.createObjectURL.apply(OriginalURL, arguments);
    };
    jURL.revokeObjectURL = function(url) {
      OriginalURL.revokeObjectURL(url);
    };
  }

  scope.URL = jURL;
  /* jshint ignore:end */
})(globalScope);

exports.FONT_IDENTITY_MATRIX = FONT_IDENTITY_MATRIX;
exports.IDENTITY_MATRIX = IDENTITY_MATRIX;
exports.OPS = OPS;
exports.VERBOSITY_LEVELS = VERBOSITY_LEVELS;
exports.UNSUPPORTED_FEATURES = UNSUPPORTED_FEATURES;
exports.AnnotationBorderStyleType = AnnotationBorderStyleType;
exports.AnnotationFlag = AnnotationFlag;
exports.AnnotationType = AnnotationType;
exports.FontType = FontType;
exports.ImageKind = ImageKind;
exports.InvalidPDFException = InvalidPDFException;
exports.MessageHandler = MessageHandler;
exports.MissingDataException = MissingDataException;
exports.MissingPDFException = MissingPDFException;
exports.NotImplementedException = NotImplementedException;
exports.PageViewport = PageViewport;
exports.PasswordException = PasswordException;
exports.PasswordResponses = PasswordResponses;
exports.StatTimer = StatTimer;
exports.StreamType = StreamType;
exports.TextRenderingMode = TextRenderingMode;
exports.UnexpectedResponseException = UnexpectedResponseException;
exports.UnknownErrorException = UnknownErrorException;
exports.Util = Util;
exports.XRefParseException = XRefParseException;
exports.arrayByteLength = arrayByteLength;
exports.arraysToBytes = arraysToBytes;
exports.assert = assert;
exports.bytesToString = bytesToString;
exports.createBlob = createBlob;
exports.createPromiseCapability = createPromiseCapability;
exports.createObjectURL = createObjectURL;
exports.deprecated = deprecated;
exports.error = error;
exports.getLookupTableFactory = getLookupTableFactory;
exports.getVerbosityLevel = getVerbosityLevel;
exports.globalScope = globalScope;
exports.info = info;
exports.isArray = isArray;
exports.isArrayBuffer = isArrayBuffer;
exports.isBool = isBool;
exports.isEmptyObj = isEmptyObj;
exports.isInt = isInt;
exports.isNum = isNum;
exports.isString = isString;
exports.isSpace = isSpace;
exports.isSameOrigin = isSameOrigin;
exports.isValidUrl = isValidUrl;
exports.isLittleEndian = isLittleEndian;
exports.isEvalSupported = isEvalSupported;
exports.loadJpegStream = loadJpegStream;
exports.log2 = log2;
exports.readInt8 = readInt8;
exports.readUint16 = readUint16;
exports.readUint32 = readUint32;
exports.removeNullCharacters = removeNullCharacters;
exports.setVerbosityLevel = setVerbosityLevel;
exports.shadow = shadow;
exports.string32 = string32;
exports.stringToBytes = stringToBytes;
exports.stringToPDFString = stringToPDFString;
exports.stringToUTF8String = stringToUTF8String;
exports.utf8StringToString = utf8StringToString;
exports.warn = warn;
}));


(function (root, factory) {
  {
    factory((root.pdfjsDisplayDOMUtils = {}), root.pdfjsSharedUtil);
  }
}(this, function (exports, sharedUtil) {

var removeNullCharacters = sharedUtil.removeNullCharacters;
var warn = sharedUtil.warn;

/**
 * Optimised CSS custom property getter/setter.
 * @class
 */
var CustomStyle = (function CustomStyleClosure() {

  // As noted on: http://www.zachstronaut.com/posts/2009/02/17/
  //              animate-css-transforms-firefox-webkit.html
  // in some versions of IE9 it is critical that ms appear in this list
  // before Moz
  var prefixes = ['ms', 'Moz', 'Webkit', 'O'];
  var _cache = Object.create(null);

  function CustomStyle() {}

  CustomStyle.getProp = function get(propName, element) {
    // check cache only when no element is given
    if (arguments.length === 1 && typeof _cache[propName] === 'string') {
      return _cache[propName];
    }

    element = element || document.documentElement;
    var style = element.style, prefixed, uPropName;

    // test standard property first
    if (typeof style[propName] === 'string') {
      return (_cache[propName] = propName);
    }

    // capitalize
    uPropName = propName.charAt(0).toUpperCase() + propName.slice(1);

    // test vendor specific properties
    for (var i = 0, l = prefixes.length; i < l; i++) {
      prefixed = prefixes[i] + uPropName;
      if (typeof style[prefixed] === 'string') {
        return (_cache[propName] = prefixed);
      }
    }

    //if all fails then set to undefined
    return (_cache[propName] = 'undefined');
  };

  CustomStyle.setProp = function set(propName, element, str) {
    var prop = this.getProp(propName);
    if (prop !== 'undefined') {
      element.style[prop] = str;
    }
  };

  return CustomStyle;
})();

function hasCanvasTypedArrays() {
  var canvas = document.createElement('canvas');
  canvas.width = canvas.height = 1;
  var ctx = canvas.getContext('2d');
  var imageData = ctx.createImageData(1, 1);
  return (typeof imageData.data.buffer !== 'undefined');
}

var LinkTarget = {
  NONE: 0, // Default value.
  SELF: 1,
  BLANK: 2,
  PARENT: 3,
  TOP: 4,
};

var LinkTargetStringMap = [
  '',
  '_self',
  '_blank',
  '_parent',
  '_top'
];

/**
 * @typedef ExternalLinkParameters
 * @typedef {Object} ExternalLinkParameters
 * @property {string} url - An absolute URL.
 * @property {LinkTarget} target - The link target.
 * @property {string} rel - The link relationship.
 */

/**
 * Adds various attributes (href, title, target, rel) to hyperlinks.
 * @param {HTMLLinkElement} link - The link element.
 * @param {ExternalLinkParameters} params
 */
function addLinkAttributes(link, params) {
  var url = params && params.url;
  link.href = link.title = (url ? removeNullCharacters(url) : '');

  if (url) {
    var target = params.target;
    if (typeof target === 'undefined') {
      target = getDefaultSetting('externalLinkTarget');
    }
    link.target = LinkTargetStringMap[target];

    var rel = params.rel;
    if (typeof rel === 'undefined') {
      rel = getDefaultSetting('externalLinkRel');
    }
    link.rel = rel;
  }
}

// Gets the file name from a given URL.
function getFilenameFromUrl(url) {
  var anchor = url.indexOf('#');
  var query = url.indexOf('?');
  var end = Math.min(
    anchor > 0 ? anchor : url.length,
    query > 0 ? query : url.length);
  return url.substring(url.lastIndexOf('/', end) + 1, end);
}

function getDefaultSetting(id) {
  // The list of the settings and their default is maintained for backward
  // compatibility and shall not be extended or modified. See also global.js.
  var globalSettings = sharedUtil.globalScope.PDFJS;
  switch (id) {
    case 'pdfBug':
      return globalSettings ? globalSettings.pdfBug : false;
    case 'disableAutoFetch':
      return globalSettings ? globalSettings.disableAutoFetch : false;
    case 'disableStream':
      return globalSettings ? globalSettings.disableStream : false;
    case 'disableRange':
      return globalSettings ? globalSettings.disableRange : false;
    case 'disableFontFace':
      return globalSettings ? globalSettings.disableFontFace : false;
    case 'disableCreateObjectURL':
      return globalSettings ? globalSettings.disableCreateObjectURL : false;
    case 'disableWebGL':
      return globalSettings ? globalSettings.disableWebGL : true;
    case 'cMapUrl':
      return globalSettings ? globalSettings.cMapUrl : null;
    case 'cMapPacked':
      return globalSettings ? globalSettings.cMapPacked : false;
    case 'postMessageTransfers':
      return globalSettings ? globalSettings.postMessageTransfers : true;
    case 'workerSrc':
      return globalSettings ? globalSettings.workerSrc : null;
    case 'disableWorker':
      return globalSettings ? globalSettings.disableWorker : false;
    case 'maxImageSize':
      return globalSettings ? globalSettings.maxImageSize : -1;
    case 'imageResourcesPath':
      return globalSettings ? globalSettings.imageResourcesPath : '';
    case 'isEvalSupported':
      return globalSettings ? globalSettings.isEvalSupported : true;
    case 'externalLinkTarget':
      if (!globalSettings) {
        return LinkTarget.NONE;
      }
      switch (globalSettings.externalLinkTarget) {
        case LinkTarget.NONE:
        case LinkTarget.SELF:
        case LinkTarget.BLANK:
        case LinkTarget.PARENT:
        case LinkTarget.TOP:
          return globalSettings.externalLinkTarget;
      }
      warn('PDFJS.externalLinkTarget is invalid: ' +
           globalSettings.externalLinkTarget);
      // Reset the external link target, to suppress further warnings.
      globalSettings.externalLinkTarget = LinkTarget.NONE;
      return LinkTarget.NONE;
    case 'externalLinkRel':
      return globalSettings ? globalSettings.externalLinkRel : 'noreferrer';
    case 'enableStats':
      return !!(globalSettings && globalSettings.enableStats);
    default:
      throw new Error('Unknown default setting: ' + id);
  }
}

function isExternalLinkTargetSet() {
  var externalLinkTarget = getDefaultSetting('externalLinkTarget');
  switch (externalLinkTarget) {
    case LinkTarget.NONE:
      return false;
    case LinkTarget.SELF:
    case LinkTarget.BLANK:
    case LinkTarget.PARENT:
    case LinkTarget.TOP:
      return true;
  }
}

exports.CustomStyle = CustomStyle;
exports.addLinkAttributes = addLinkAttributes;
exports.isExternalLinkTargetSet = isExternalLinkTargetSet;
exports.getFilenameFromUrl = getFilenameFromUrl;
exports.LinkTarget = LinkTarget;
exports.hasCanvasTypedArrays = hasCanvasTypedArrays;
exports.getDefaultSetting = getDefaultSetting;
}));


(function (root, factory) {
  {
    factory((root.pdfjsDisplayFontLoader = {}), root.pdfjsSharedUtil);
  }
}(this, function (exports, sharedUtil) {

var assert = sharedUtil.assert;
var bytesToString = sharedUtil.bytesToString;
var string32 = sharedUtil.string32;
var shadow = sharedUtil.shadow;
var warn = sharedUtil.warn;

function FontLoader(docId) {
  this.docId = docId;
  this.styleElement = null;
  this.nativeFontFaces = [];
  this.loadTestFontId = 0;
  this.loadingContext = {
    requests: [],
    nextRequestId: 0
  };
}
FontLoader.prototype = {
  insertRule: function fontLoaderInsertRule(rule) {
    var styleElement = this.styleElement;
    if (!styleElement) {
      styleElement = this.styleElement = document.createElement('style');
      styleElement.id = 'PDFJS_FONT_STYLE_TAG_' + this.docId;
      document.documentElement.getElementsByTagName('head')[0].appendChild(
        styleElement);
    }

    var styleSheet = styleElement.sheet;
    styleSheet.insertRule(rule, styleSheet.cssRules.length);
  },

  clear: function fontLoaderClear() {
    var styleElement = this.styleElement;
    if (styleElement) {
      styleElement.parentNode.removeChild(styleElement);
      styleElement = this.styleElement = null;
    }
    this.nativeFontFaces.forEach(function(nativeFontFace) {
      document.fonts.delete(nativeFontFace);
    });
    this.nativeFontFaces.length = 0;
  },
  get loadTestFont() {
    // This is a CFF font with 1 glyph for '.' that fills its entire width and
    // height.
    return shadow(this, 'loadTestFont', atob(
      'T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQ' +
      'AABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwA' +
      'AAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbm' +
      'FtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAA' +
      'AADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6A' +
      'ABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAA' +
      'MQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAA' +
      'AAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAA' +
      'AAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQ' +
      'AAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMA' +
      'AQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAA' +
      'EAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAA' +
      'AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAA' +
      'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
      'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
      'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
      'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAA' +
      'AAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgc' +
      'A/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWF' +
      'hYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQA' +
      'AAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAg' +
      'ABAAAAAAAAAAAD6AAAAAAAAA=='
    ));
  },

  addNativeFontFace: function fontLoader_addNativeFontFace(nativeFontFace) {
    this.nativeFontFaces.push(nativeFontFace);
    document.fonts.add(nativeFontFace);
  },

  bind: function fontLoaderBind(fonts, callback) {
    var rules = [];
    var fontsToLoad = [];
    var fontLoadPromises = [];
    var getNativeFontPromise = function(nativeFontFace) {
      // Return a promise that is always fulfilled, even when the font fails to
      // load.
      return nativeFontFace.loaded.catch(function(e) {
        warn('Failed to load font "' + nativeFontFace.family + '": ' + e);
      });
    };
    for (var i = 0, ii = fonts.length; i < ii; i++) {
      var font = fonts[i];

      // Add the font to the DOM only once or skip if the font
      // is already loaded.
      if (font.attached || font.loading === false) {
        continue;
      }
      font.attached = true;

      if (FontLoader.isFontLoadingAPISupported) {
        var nativeFontFace = font.createNativeFontFace();
        if (nativeFontFace) {
          this.addNativeFontFace(nativeFontFace);
          fontLoadPromises.push(getNativeFontPromise(nativeFontFace));
        }
      } else {
        var rule = font.createFontFaceRule();
        if (rule) {
          this.insertRule(rule);
          rules.push(rule);
          fontsToLoad.push(font);
        }
      }
    }

    var request = this.queueLoadingCallback(callback);
    if (FontLoader.isFontLoadingAPISupported) {
      Promise.all(fontLoadPromises).then(function() {
        request.complete();
      });
    } else if (rules.length > 0 && !FontLoader.isSyncFontLoadingSupported) {
      this.prepareFontLoadEvent(rules, fontsToLoad, request);
    } else {
      request.complete();
    }
  },

  queueLoadingCallback: function FontLoader_queueLoadingCallback(callback) {
    function LoadLoader_completeRequest() {
      assert(!request.end, 'completeRequest() cannot be called twice');
      request.end = Date.now();

      // sending all completed requests in order how they were queued
      while (context.requests.length > 0 && context.requests[0].end) {
        var otherRequest = context.requests.shift();
        setTimeout(otherRequest.callback, 0);
      }
    }

    var context = this.loadingContext;
    var requestId = 'pdfjs-font-loading-' + (context.nextRequestId++);
    var request = {
      id: requestId,
      complete: LoadLoader_completeRequest,
      callback: callback,
      started: Date.now()
    };
    context.requests.push(request);
    return request;
  },

  prepareFontLoadEvent: function fontLoaderPrepareFontLoadEvent(rules,
                                                                fonts,
                                                                request) {
      /** Hack begin */
      // There's currently no event when a font has finished downloading so the
      // following code is a dirty hack to 'guess' when a font is
      // ready. It's assumed fonts are loaded in order, so add a known test
      // font after the desired fonts and then test for the loading of that
      // test font.

      function int32(data, offset) {
        return (data.charCodeAt(offset) << 24) |
               (data.charCodeAt(offset + 1) << 16) |
               (data.charCodeAt(offset + 2) << 8) |
               (data.charCodeAt(offset + 3) & 0xff);
      }

      function spliceString(s, offset, remove, insert) {
        var chunk1 = s.substr(0, offset);
        var chunk2 = s.substr(offset + remove);
        return chunk1 + insert + chunk2;
      }

      var i, ii;

      var canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      var ctx = canvas.getContext('2d');

      var called = 0;
      function isFontReady(name, callback) {
        called++;
        // With setTimeout clamping this gives the font ~100ms to load.
        if(called > 30) {
          warn('Load test font never loaded.');
          callback();
          return;
        }
        ctx.font = '30px ' + name;
        ctx.fillText('.', 0, 20);
        var imageData = ctx.getImageData(0, 0, 1, 1);
        if (imageData.data[3] > 0) {
          callback();
          return;
        }
        setTimeout(isFontReady.bind(null, name, callback));
      }

      var loadTestFontId = 'lt' + Date.now() + this.loadTestFontId++;
      // Chromium seems to cache fonts based on a hash of the actual font data,
      // so the font must be modified for each load test else it will appear to
      // be loaded already.
      // TODO: This could maybe be made faster by avoiding the btoa of the full
      // font by splitting it in chunks before hand and padding the font id.
      var data = this.loadTestFont;
      var COMMENT_OFFSET = 976; // has to be on 4 byte boundary (for checksum)
      data = spliceString(data, COMMENT_OFFSET, loadTestFontId.length,
                          loadTestFontId);
      // CFF checksum is important for IE, adjusting it
      var CFF_CHECKSUM_OFFSET = 16;
      var XXXX_VALUE = 0x58585858; // the "comment" filled with 'X'
      var checksum = int32(data, CFF_CHECKSUM_OFFSET);
      for (i = 0, ii = loadTestFontId.length - 3; i < ii; i += 4) {
        checksum = (checksum - XXXX_VALUE + int32(loadTestFontId, i)) | 0;
      }
      if (i < loadTestFontId.length) { // align to 4 bytes boundary
        checksum = (checksum - XXXX_VALUE +
                    int32(loadTestFontId + 'XXX', i)) | 0;
      }
      data = spliceString(data, CFF_CHECKSUM_OFFSET, 4, string32(checksum));

      var url = 'url(data:font/opentype;base64,' + btoa(data) + ');';
      var rule = '@font-face { font-family:"' + loadTestFontId + '";src:' +
                 url + '}';
      this.insertRule(rule);

      var names = [];
      for (i = 0, ii = fonts.length; i < ii; i++) {
        names.push(fonts[i].loadedName);
      }
      names.push(loadTestFontId);

      var div = document.createElement('div');
      div.setAttribute('style',
                       'visibility: hidden;' +
                       'width: 10px; height: 10px;' +
                       'position: absolute; top: 0px; left: 0px;');
      for (i = 0, ii = names.length; i < ii; ++i) {
        var span = document.createElement('span');
        span.textContent = 'Hi';
        span.style.fontFamily = names[i];
        div.appendChild(span);
      }
      document.body.appendChild(div);

      isFontReady(loadTestFontId, function() {
        document.body.removeChild(div);
        request.complete();
      });
      /** Hack end */
  }
};
FontLoader.isFontLoadingAPISupported = typeof document !== 'undefined' &&
                                       !!document.fonts;
Object.defineProperty(FontLoader, 'isSyncFontLoadingSupported', {
  get: function () {
    if (typeof navigator === 'undefined') {
      // node.js - we can pretend sync font loading is supported.
      return shadow(FontLoader, 'isSyncFontLoadingSupported', true);
    }

    var supported = false;

    // User agent string sniffing is bad, but there is no reliable way to tell
    // if font is fully loaded and ready to be used with canvas.
    var m = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);
    if (m && m[1] >= 14) {
      supported = true;
    }
    // TODO other browsers
    return shadow(FontLoader, 'isSyncFontLoadingSupported', supported);
  },
  enumerable: true,
  configurable: true
});

var IsEvalSupportedCached = {
  get value() {
    return shadow(this, 'value', sharedUtil.isEvalSupported());
  }
};

var FontFaceObject = (function FontFaceObjectClosure() {
  function FontFaceObject(translatedData, options) {
    this.compiledGlyphs = Object.create(null);
    // importing translated data
    for (var i in translatedData) {
      this[i] = translatedData[i];
    }
    this.options = options;
  }
  FontFaceObject.prototype = {
    createNativeFontFace: function FontFaceObject_createNativeFontFace() {
      if (!this.data) {
        return null;
      }

      if (this.options.disableFontFace) {
        this.disableFontFace = true;
        return null;
      }

      var nativeFontFace = new FontFace(this.loadedName, this.data, {});

      if (this.options.fontRegistry) {
        this.options.fontRegistry.registerFont(this);
      }
      return nativeFontFace;
    },

    createFontFaceRule: function FontFaceObject_createFontFaceRule() {
      if (!this.data) {
        return null;
      }

      if (this.options.disableFontFace) {
        this.disableFontFace = true;
        return null;
      }

      var data = bytesToString(new Uint8Array(this.data));
      var fontName = this.loadedName;

      // Add the font-face rule to the document
      var url = ('url(data:' + this.mimetype + ';base64,' + btoa(data) + ');');
      var rule = '@font-face { font-family:"' + fontName + '";src:' + url + '}';

      if (this.options.fontRegistry) {
        this.options.fontRegistry.registerFont(this, url);
      }

      return rule;
    },

    getPathGenerator:
        function FontFaceObject_getPathGenerator(objs, character) {
      if (!(character in this.compiledGlyphs)) {
        var cmds = objs.get(this.loadedName + '_path_' + character);
        var current, i, len;

        // If we can, compile cmds into JS for MAXIMUM SPEED
        if (this.options.isEvalSupported && IsEvalSupportedCached.value) {
          var args, js = '';
          for (i = 0, len = cmds.length; i < len; i++) {
            current = cmds[i];

            if (current.args !== undefined) {
              args = current.args.join(',');
            } else {
              args = '';
            }

            js += 'c.' + current.cmd + '(' + args + ');\n';
          }
          /* jshint -W054 */
          this.compiledGlyphs[character] = new Function('c', 'size', js);
        } else {
          // But fall back on using Function.prototype.apply() if we're
          // blocked from using eval() for whatever reason (like CSP policies)
          this.compiledGlyphs[character] = function(c, size) {
            for (i = 0, len = cmds.length; i < len; i++) {
              current = cmds[i];

              if (current.cmd === 'scale') {
                current.args = [size, -size];
              }

              c[current.cmd].apply(c, current.args);
            }
          };
        }
      }
      return this.compiledGlyphs[character];
    }
  };
  return FontFaceObject;
})();

exports.FontFaceObject = FontFaceObject;
exports.FontLoader = FontLoader;
}));


(function (root, factory) {
  {
    factory((root.pdfjsDisplayMetadata = {}), root.pdfjsSharedUtil);
  }
}(this, function (exports, sharedUtil) {

var error = sharedUtil.error;

  function fixMetadata(meta) {
    return meta.replace(/>\\376\\377([^<]+)/g, function(all, codes) {
      var bytes = codes.replace(/\\([0-3])([0-7])([0-7])/g,
                                function(code, d1, d2, d3) {
        return String.fromCharCode(d1 * 64 + d2 * 8 + d3 * 1);
      });
      var chars = '';
      for (var i = 0; i < bytes.length; i += 2) {
        var code = bytes.charCodeAt(i) * 256 + bytes.charCodeAt(i + 1);
        chars += code >= 32 && code < 127 && code !== 60 && code !== 62 &&
          code !== 38 && false ? String.fromCharCode(code) :
          '&#x' + (0x10000 + code).toString(16).substring(1) + ';';
      }
      return '>' + chars;
    });
  }

  function Metadata(meta) {
    if (typeof meta === 'string') {
      // Ghostscript produces invalid metadata
      meta = fixMetadata(meta);

      var parser = new DOMParser();
      meta = parser.parseFromString(meta, 'application/xml');
    } else if (!(meta instanceof Document)) {
      error('Metadata: Invalid metadata object');
    }

    this.metaDocument = meta;
    this.metadata = Object.create(null);
    this.parse();
  }

  Metadata.prototype = {
    parse: function Metadata_parse() {
      var doc = this.metaDocument;
      var rdf = doc.documentElement;

      if (rdf.nodeName.toLowerCase() !== 'rdf:rdf') { // Wrapped in <xmpmeta>
        rdf = rdf.firstChild;
        while (rdf && rdf.nodeName.toLowerCase() !== 'rdf:rdf') {
          rdf = rdf.nextSibling;
        }
      }

      var nodeName = (rdf) ? rdf.nodeName.toLowerCase() : null;
      if (!rdf || nodeName !== 'rdf:rdf' || !rdf.hasChildNodes()) {
        return;
      }

      var children = rdf.childNodes, desc, entry, name, i, ii, length, iLength;
      for (i = 0, length = children.length; i < length; i++) {
        desc = children[i];
        if (desc.nodeName.toLowerCase() !== 'rdf:description') {
          continue;
        }

        for (ii = 0, iLength = desc.childNodes.length; ii < iLength; ii++) {
          if (desc.childNodes[ii].nodeName.toLowerCase() !== '#text') {
            entry = desc.childNodes[ii];
            name = entry.nodeName.toLowerCase();
            this.metadata[name] = entry.textContent.trim();
          }
        }
      }
    },

    get: function Metadata_get(name) {
      return this.metadata[name] || null;
    },

    has: function Metadata_has(name) {
      return typeof this.metadata[name] !== 'undefined';
    }
  };

exports.Metadata = Metadata;
}));


(function (root, factory) {
  {
    factory((root.pdfjsDisplaySVG = {}), root.pdfjsSharedUtil);
  }
}(this, function (exports, sharedUtil) {
var FONT_IDENTITY_MATRIX = sharedUtil.FONT_IDENTITY_MATRIX;
var IDENTITY_MATRIX = sharedUtil.IDENTITY_MATRIX;
var ImageKind = sharedUtil.ImageKind;
var OPS = sharedUtil.OPS;
var Util = sharedUtil.Util;
var isNum = sharedUtil.isNum;
var isArray = sharedUtil.isArray;
var warn = sharedUtil.warn;
var createObjectURL = sharedUtil.createObjectURL;

var SVG_DEFAULTS = {
  fontStyle: 'normal',
  fontWeight: 'normal',
  fillColor: '#000000'
};

var convertImgDataToPng = (function convertImgDataToPngClosure() {
  var PNG_HEADER =
    new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  var CHUNK_WRAPPER_SIZE = 12;

  var crcTable = new Int32Array(256);
  for (var i = 0; i < 256; i++) {
    var c = i;
    for (var h = 0; h < 8; h++) {
      if (c & 1) {
        c = 0xedB88320 ^ ((c >> 1) & 0x7fffffff);
      } else {
        c = (c >> 1) & 0x7fffffff;
      }
    }
    crcTable[i] = c;
  }

  function crc32(data, start, end) {
    var crc = -1;
    for (var i = start; i < end; i++) {
      var a = (crc ^ data[i]) & 0xff;
      var b = crcTable[a];
      crc = (crc >>> 8) ^ b;
    }
    return crc ^ -1;
  }

  function writePngChunk(type, body, data, offset) {
    var p = offset;
    var len = body.length;

    data[p] = len >> 24 & 0xff;
    data[p + 1] = len >> 16 & 0xff;
    data[p + 2] = len >> 8 & 0xff;
    data[p + 3] = len & 0xff;
    p += 4;

    data[p] = type.charCodeAt(0) & 0xff;
    data[p + 1] = type.charCodeAt(1) & 0xff;
    data[p + 2] = type.charCodeAt(2) & 0xff;
    data[p + 3] = type.charCodeAt(3) & 0xff;
    p += 4;

    data.set(body, p);
    p += body.length;

    var crc = crc32(data, offset + 4, p);

    data[p] = crc >> 24 & 0xff;
    data[p + 1] = crc >> 16 & 0xff;
    data[p + 2] = crc >> 8 & 0xff;
    data[p + 3] = crc & 0xff;
  }

  function adler32(data, start, end) {
    var a = 1;
    var b = 0;
    for (var i = start; i < end; ++i) {
      a = (a + (data[i] & 0xff)) % 65521;
      b = (b + a) % 65521;
    }
    return (b << 16) | a;
  }

  function encode(imgData, kind, forceDataSchema) {
    var width = imgData.width;
    var height = imgData.height;
    var bitDepth, colorType, lineSize;
    var bytes = imgData.data;

    switch (kind) {
      case ImageKind.GRAYSCALE_1BPP:
        colorType = 0;
        bitDepth = 1;
        lineSize = (width + 7) >> 3;
        break;
      case ImageKind.RGB_24BPP:
        colorType = 2;
        bitDepth = 8;
        lineSize = width * 3;
        break;
      case ImageKind.RGBA_32BPP:
        colorType = 6;
        bitDepth = 8;
        lineSize = width * 4;
        break;
      default:
        throw new Error('invalid format');
    }

    // prefix every row with predictor 0
    var literals = new Uint8Array((1 + lineSize) * height);
    var offsetLiterals = 0, offsetBytes = 0;
    var y, i;
    for (y = 0; y < height; ++y) {
      literals[offsetLiterals++] = 0; // no prediction
      literals.set(bytes.subarray(offsetBytes, offsetBytes + lineSize),
                   offsetLiterals);
      offsetBytes += lineSize;
      offsetLiterals += lineSize;
    }

    if (kind === ImageKind.GRAYSCALE_1BPP) {
      // inverting for B/W
      offsetLiterals = 0;
      for (y = 0; y < height; y++) {
        offsetLiterals++; // skipping predictor
        for (i = 0; i < lineSize; i++) {
          literals[offsetLiterals++] ^= 0xFF;
        }
      }
    }

    var ihdr = new Uint8Array([
      width >> 24 & 0xff,
      width >> 16 & 0xff,
      width >> 8 & 0xff,
      width & 0xff,
      height >> 24 & 0xff,
      height >> 16 & 0xff,
      height >> 8 & 0xff,
      height & 0xff,
      bitDepth, // bit depth
      colorType, // color type
      0x00, // compression method
      0x00, // filter method
      0x00 // interlace method
    ]);

    var len = literals.length;
    var maxBlockLength = 0xFFFF;

    var deflateBlocks = Math.ceil(len / maxBlockLength);
    var idat = new Uint8Array(2 + len + deflateBlocks * 5 + 4);
    var pi = 0;
    idat[pi++] = 0x78; // compression method and flags
    idat[pi++] = 0x9c; // flags

    var pos = 0;
    while (len > maxBlockLength) {
      // writing non-final DEFLATE blocks type 0 and length of 65535
      idat[pi++] = 0x00;
      idat[pi++] = 0xff;
      idat[pi++] = 0xff;
      idat[pi++] = 0x00;
      idat[pi++] = 0x00;
      idat.set(literals.subarray(pos, pos + maxBlockLength), pi);
      pi += maxBlockLength;
      pos += maxBlockLength;
      len -= maxBlockLength;
    }

    // writing non-final DEFLATE blocks type 0
    idat[pi++] = 0x01;
    idat[pi++] = len & 0xff;
    idat[pi++] = len >> 8 & 0xff;
    idat[pi++] = (~len & 0xffff) & 0xff;
    idat[pi++] = (~len & 0xffff) >> 8 & 0xff;
    idat.set(literals.subarray(pos), pi);
    pi += literals.length - pos;

    var adler = adler32(literals, 0, literals.length); // checksum
    idat[pi++] = adler >> 24 & 0xff;
    idat[pi++] = adler >> 16 & 0xff;
    idat[pi++] = adler >> 8 & 0xff;
    idat[pi++] = adler & 0xff;

    // PNG will consists: header, IHDR+data, IDAT+data, and IEND.
    var pngLength = PNG_HEADER.length + (CHUNK_WRAPPER_SIZE * 3) +
                    ihdr.length + idat.length;
    var data = new Uint8Array(pngLength);
    var offset = 0;
    data.set(PNG_HEADER, offset);
    offset += PNG_HEADER.length;
    writePngChunk('IHDR', ihdr, data, offset);
    offset += CHUNK_WRAPPER_SIZE + ihdr.length;
    writePngChunk('IDATA', idat, data, offset);
    offset += CHUNK_WRAPPER_SIZE + idat.length;
    writePngChunk('IEND', new Uint8Array(0), data, offset);

    return createObjectURL(data, 'image/png', forceDataSchema);
  }

  return function convertImgDataToPng(imgData, forceDataSchema) {
    var kind = (imgData.kind === undefined ?
                ImageKind.GRAYSCALE_1BPP : imgData.kind);
    return encode(imgData, kind, forceDataSchema);
  };
})();

var SVGExtraState = (function SVGExtraStateClosure() {
  function SVGExtraState() {
    this.fontSizeScale = 1;
    this.fontWeight = SVG_DEFAULTS.fontWeight;
    this.fontSize = 0;

    this.textMatrix = IDENTITY_MATRIX;
    this.fontMatrix = FONT_IDENTITY_MATRIX;
    this.leading = 0;

    // Current point (in user coordinates)
    this.x = 0;
    this.y = 0;

    // Start of text line (in text coordinates)
    this.lineX = 0;
    this.lineY = 0;

    // Character and word spacing
    this.charSpacing = 0;
    this.wordSpacing = 0;
    this.textHScale = 1;
    this.textRise = 0;

    // Default foreground and background colors
    this.fillColor = SVG_DEFAULTS.fillColor;
    this.strokeColor = '#000000';

    this.fillAlpha = 1;
    this.strokeAlpha = 1;
    this.lineWidth = 1;
    this.lineJoin = '';
    this.lineCap = '';
    this.miterLimit = 0;

    this.dashArray = [];
    this.dashPhase = 0;

    this.dependencies = [];

    // Clipping
    this.clipId = '';
    this.pendingClip = false;

    this.maskId = '';
  }

  SVGExtraState.prototype = {
    clone: function SVGExtraState_clone() {
      return Object.create(this);
    },
    setCurrentPoint: function SVGExtraState_setCurrentPoint(x, y) {
      this.x = x;
      this.y = y;
    }
  };
  return SVGExtraState;
})();

var SVGGraphics = (function SVGGraphicsClosure() {
  function createScratchSVG(width, height) {
    var NS = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(NS, 'svg:svg');
    svg.setAttributeNS(null, 'version', '1.1');
    svg.setAttributeNS(null, 'width', width + 'px');
    svg.setAttributeNS(null, 'height', height + 'px');
    svg.setAttributeNS(null, 'viewBox', '0 0 ' + width + ' ' + height);
    return svg;
  }

  function opListToTree(opList) {
    var opTree = [];
    var tmp = [];
    var opListLen = opList.length;

    for (var x = 0; x < opListLen; x++) {
      if (opList[x].fn === 'save') {
        opTree.push({'fnId': 92, 'fn': 'group', 'items': []});
        tmp.push(opTree);
        opTree = opTree[opTree.length - 1].items;
        continue;
      }

      if(opList[x].fn === 'restore') {
        opTree = tmp.pop();
      } else {
        opTree.push(opList[x]);
      }
    }
    return opTree;
  }

  /**
   * Formats float number.
   * @param value {number} number to format.
   * @returns {string}
   */
  function pf(value) {
    if (value === (value | 0)) { // integer number
      return value.toString();
    }
    var s = value.toFixed(10);
    var i = s.length - 1;
    if (s[i] !== '0') {
      return s;
    }
    // removing trailing zeros
    do {
      i--;
    } while (s[i] === '0');
    return s.substr(0, s[i] === '.' ? i : i + 1);
  }

  /**
   * Formats transform matrix. The standard rotation, scale and translate
   * matrices are replaced by their shorter forms, and for identity matrix
   * returns empty string to save the memory.
   * @param m {Array} matrix to format.
   * @returns {string}
   */
  function pm(m) {
    if (m[4] === 0 && m[5] === 0) {
      if (m[1] === 0 && m[2] === 0) {
        if (m[0] === 1 && m[3] === 1) {
          return '';
        }
        return 'scale(' + pf(m[0]) + ' ' + pf(m[3]) + ')';
      }
      if (m[0] === m[3] && m[1] === -m[2]) {
        var a = Math.acos(m[0]) * 180 / Math.PI;
        return 'rotate(' + pf(a) + ')';
      }
    } else {
      if (m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 1) {
        return 'translate(' + pf(m[4]) + ' ' + pf(m[5]) + ')';
      }
    }
    return 'matrix(' + pf(m[0]) + ' ' + pf(m[1]) + ' ' + pf(m[2]) + ' ' +
      pf(m[3]) + ' ' + pf(m[4]) + ' ' + pf(m[5]) + ')';
  }

  function SVGGraphics(commonObjs, objs, forceDataSchema) {
    this.current = new SVGExtraState();
    this.transformMatrix = IDENTITY_MATRIX; // Graphics state matrix
    this.transformStack = [];
    this.extraStack = [];
    this.commonObjs = commonObjs;
    this.objs = objs;
    this.pendingEOFill = false;

    this.embedFonts = false;
    this.embeddedFonts = Object.create(null);
    this.cssStyle = null;
    this.forceDataSchema = !!forceDataSchema;
  }

  var NS = 'http://www.w3.org/2000/svg';
  var XML_NS = 'http://www.w3.org/XML/1998/namespace';
  var XLINK_NS = 'http://www.w3.org/1999/xlink';
  var LINE_CAP_STYLES = ['butt', 'round', 'square'];
  var LINE_JOIN_STYLES = ['miter', 'round', 'bevel'];
  var clipCount = 0;
  var maskCount = 0;

  SVGGraphics.prototype = {
    save: function SVGGraphics_save() {
      this.transformStack.push(this.transformMatrix);
      var old = this.current;
      this.extraStack.push(old);
      this.current = old.clone();
    },

    restore: function SVGGraphics_restore() {
      this.transformMatrix = this.transformStack.pop();
      this.current = this.extraStack.pop();

      this.tgrp = document.createElementNS(NS, 'svg:g');
      this.tgrp.setAttributeNS(null, 'transform', pm(this.transformMatrix));
      this.pgrp.appendChild(this.tgrp);
    },

    group: function SVGGraphics_group(items) {
      this.save();
      this.executeOpTree(items);
      this.restore();
    },

    loadDependencies: function SVGGraphics_loadDependencies(operatorList) {
      var fnArray = operatorList.fnArray;
      var fnArrayLen = fnArray.length;
      var argsArray = operatorList.argsArray;

      var self = this;
      for (var i = 0; i < fnArrayLen; i++) {
        if (OPS.dependency === fnArray[i]) {
          var deps = argsArray[i];
          for (var n = 0, nn = deps.length; n < nn; n++) {
            var obj = deps[n];
            var common = obj.substring(0, 2) === 'g_';
            var promise;
            if (common) {
              promise = new Promise(function(resolve) {
                self.commonObjs.get(obj, resolve);
              });
            } else {
              promise = new Promise(function(resolve) {
                self.objs.get(obj, resolve);
              });
            }
            this.current.dependencies.push(promise);
          }
        }
      }
      return Promise.all(this.current.dependencies);
    },

    transform: function SVGGraphics_transform(a, b, c, d, e, f) {
      var transformMatrix = [a, b, c, d, e, f];
      this.transformMatrix = Util.transform(this.transformMatrix,
                                            transformMatrix);

      this.tgrp = document.createElementNS(NS, 'svg:g');
      this.tgrp.setAttributeNS(null, 'transform', pm(this.transformMatrix));
    },

    getSVG: function SVGGraphics_getSVG(operatorList, viewport) {
      this.svg = createScratchSVG(viewport.width, viewport.height);
      this.viewport = viewport;

      return this.loadDependencies(operatorList).then(function () {
        this.transformMatrix = IDENTITY_MATRIX;
        this.pgrp = document.createElementNS(NS, 'svg:g'); // Parent group
        this.pgrp.setAttributeNS(null, 'transform', pm(viewport.transform));
        this.tgrp = document.createElementNS(NS, 'svg:g'); // Transform group
        this.tgrp.setAttributeNS(null, 'transform', pm(this.transformMatrix));
        this.defs = document.createElementNS(NS, 'svg:defs');
        this.pgrp.appendChild(this.defs);
        this.pgrp.appendChild(this.tgrp);
        this.svg.appendChild(this.pgrp);
        var opTree = this.convertOpList(operatorList);
        this.executeOpTree(opTree);
        return this.svg;
      }.bind(this));
    },

    convertOpList: function SVGGraphics_convertOpList(operatorList) {
      var argsArray = operatorList.argsArray;
      var fnArray = operatorList.fnArray;
      var fnArrayLen  = fnArray.length;
      var REVOPS = [];
      var opList = [];

      for (var op in OPS) {
        REVOPS[OPS[op]] = op;
      }

      for (var x = 0; x < fnArrayLen; x++) {
        var fnId = fnArray[x];
        opList.push({'fnId' : fnId, 'fn': REVOPS[fnId], 'args': argsArray[x]});
      }
      return opListToTree(opList);
    },

    executeOpTree: function SVGGraphics_executeOpTree(opTree) {
      var opTreeLen = opTree.length;
      for(var x = 0; x < opTreeLen; x++) {
        var fn = opTree[x].fn;
        var fnId = opTree[x].fnId;
        var args = opTree[x].args;

        switch (fnId | 0) {
          case OPS.beginText:
            this.beginText();
            break;
          case OPS.setLeading:
            this.setLeading(args);
            break;
          case OPS.setLeadingMoveText:
            this.setLeadingMoveText(args[0], args[1]);
            break;
          case OPS.setFont:
            this.setFont(args);
            break;
          case OPS.showText:
            this.showText(args[0]);
            break;
          case OPS.showSpacedText:
            this.showText(args[0]);
            break;
          case OPS.endText:
            this.endText();
            break;
          case OPS.moveText:
            this.moveText(args[0], args[1]);
            break;
          case OPS.setCharSpacing:
            this.setCharSpacing(args[0]);
            break;
          case OPS.setWordSpacing:
            this.setWordSpacing(args[0]);
            break;
          case OPS.setHScale:
            this.setHScale(args[0]);
            break;
          case OPS.setTextMatrix:
            this.setTextMatrix(args[0], args[1], args[2],
                               args[3], args[4], args[5]);
            break;
          case OPS.setLineWidth:
            this.setLineWidth(args[0]);
            break;
          case OPS.setLineJoin:
            this.setLineJoin(args[0]);
            break;
          case OPS.setLineCap:
            this.setLineCap(args[0]);
            break;
          case OPS.setMiterLimit:
            this.setMiterLimit(args[0]);
            break;
          case OPS.setFillRGBColor:
            this.setFillRGBColor(args[0], args[1], args[2]);
            break;
          case OPS.setStrokeRGBColor:
            this.setStrokeRGBColor(args[0], args[1], args[2]);
            break;
          case OPS.setDash:
            this.setDash(args[0], args[1]);
            break;
          case OPS.setGState:
            this.setGState(args[0]);
            break;
          case OPS.fill:
            this.fill();
            break;
          case OPS.eoFill:
            this.eoFill();
            break;
          case OPS.stroke:
            this.stroke();
            break;
          case OPS.fillStroke:
            this.fillStroke();
            break;
          case OPS.eoFillStroke:
            this.eoFillStroke();
            break;
          case OPS.clip:
            this.clip('nonzero');
            break;
          case OPS.eoClip:
            this.clip('evenodd');
            break;
          case OPS.paintSolidColorImageMask:
            this.paintSolidColorImageMask();
            break;
          case OPS.paintJpegXObject:
            this.paintJpegXObject(args[0], args[1], args[2]);
            break;
          case OPS.paintImageXObject:
            this.paintImageXObject(args[0]);
            break;
          case OPS.paintInlineImageXObject:
            this.paintInlineImageXObject(args[0]);
            break;
          case OPS.paintImageMaskXObject:
            this.paintImageMaskXObject(args[0]);
            break;
          case OPS.paintFormXObjectBegin:
            this.paintFormXObjectBegin(args[0], args[1]);
            break;
          case OPS.paintFormXObjectEnd:
            this.paintFormXObjectEnd();
            break;
          case OPS.closePath:
            this.closePath();
            break;
          case OPS.closeStroke:
            this.closeStroke();
            break;
          case OPS.closeFillStroke:
            this.closeFillStroke();
            break;
          case OPS.nextLine:
            this.nextLine();
            break;
          case OPS.transform:
            this.transform(args[0], args[1], args[2], args[3],
                           args[4], args[5]);
            break;
          case OPS.constructPath:
            this.constructPath(args[0], args[1]);
            break;
          case OPS.endPath:
            this.endPath();
            break;
          case 92:
            this.group(opTree[x].items);
            break;
          default:
            warn('Unimplemented method '+ fn);
            break;
        }
      }
    },

    setWordSpacing: function SVGGraphics_setWordSpacing(wordSpacing) {
      this.current.wordSpacing = wordSpacing;
    },

    setCharSpacing: function SVGGraphics_setCharSpacing(charSpacing) {
      this.current.charSpacing = charSpacing;
    },

    nextLine: function SVGGraphics_nextLine() {
      this.moveText(0, this.current.leading);
    },

    setTextMatrix: function SVGGraphics_setTextMatrix(a, b, c, d, e, f) {
      var current = this.current;
      this.current.textMatrix = this.current.lineMatrix = [a, b, c, d, e, f];

      this.current.x = this.current.lineX = 0;
      this.current.y = this.current.lineY = 0;

      current.xcoords = [];
      current.tspan = document.createElementNS(NS, 'svg:tspan');
      current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
      current.tspan.setAttributeNS(null, 'font-size',
                                   pf(current.fontSize) + 'px');
      current.tspan.setAttributeNS(null, 'y', pf(-current.y));

      current.txtElement = document.createElementNS(NS, 'svg:text');
      current.txtElement.appendChild(current.tspan);
    },

    beginText: function SVGGraphics_beginText() {
      this.current.x = this.current.lineX = 0;
      this.current.y = this.current.lineY = 0;
      this.current.textMatrix = IDENTITY_MATRIX;
      this.current.lineMatrix = IDENTITY_MATRIX;
      this.current.tspan = document.createElementNS(NS, 'svg:tspan');
      this.current.txtElement = document.createElementNS(NS, 'svg:text');
      this.current.txtgrp = document.createElementNS(NS, 'svg:g');
      this.current.xcoords = [];
    },

    moveText: function SVGGraphics_moveText(x, y) {
      var current = this.current;
      this.current.x = this.current.lineX += x;
      this.current.y = this.current.lineY += y;

      current.xcoords = [];
      current.tspan = document.createElementNS(NS, 'svg:tspan');
      current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
      current.tspan.setAttributeNS(null, 'font-size',
                                   pf(current.fontSize) + 'px');
      current.tspan.setAttributeNS(null, 'y', pf(-current.y));
    },

    showText: function SVGGraphics_showText(glyphs) {
      var current = this.current;
      var font = current.font;
      var fontSize = current.fontSize;

      if (fontSize === 0) {
        return;
      }

      var charSpacing = current.charSpacing;
      var wordSpacing = current.wordSpacing;
      var fontDirection = current.fontDirection;
      var textHScale = current.textHScale * fontDirection;
      var glyphsLength = glyphs.length;
      var vertical = font.vertical;
      var widthAdvanceScale = fontSize * current.fontMatrix[0];

      var x = 0, i;
      for (i = 0; i < glyphsLength; ++i) {
        var glyph = glyphs[i];
        if (glyph === null) {
          // word break
          x += fontDirection * wordSpacing;
          continue;
        } else if (isNum(glyph)) {
          x += -glyph * fontSize * 0.001;
          continue;
        }
        current.xcoords.push(current.x + x * textHScale);

        var width = glyph.width;
        var character = glyph.fontChar;
        var charWidth = width * widthAdvanceScale + charSpacing * fontDirection;
        x += charWidth;

        current.tspan.textContent += character;
      }
      if (vertical) {
        current.y -= x * textHScale;
      } else {
        current.x += x * textHScale;
      }

      current.tspan.setAttributeNS(null, 'x',
                                   current.xcoords.map(pf).join(' '));
      current.tspan.setAttributeNS(null, 'y', pf(-current.y));
      current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
      current.tspan.setAttributeNS(null, 'font-size',
                                   pf(current.fontSize) + 'px');
      if (current.fontStyle !== SVG_DEFAULTS.fontStyle) {
        current.tspan.setAttributeNS(null, 'font-style', current.fontStyle);
      }
      if (current.fontWeight !== SVG_DEFAULTS.fontWeight) {
        current.tspan.setAttributeNS(null, 'font-weight', current.fontWeight);
      }
      if (current.fillColor !== SVG_DEFAULTS.fillColor) {
        current.tspan.setAttributeNS(null, 'fill', current.fillColor);
      }

      current.txtElement.setAttributeNS(null, 'transform',
                                        pm(current.textMatrix) +
                                        ' scale(1, -1)' );
      current.txtElement.setAttributeNS(XML_NS, 'xml:space', 'preserve');
      current.txtElement.appendChild(current.tspan);
      current.txtgrp.appendChild(current.txtElement);

      this.tgrp.appendChild(current.txtElement);

    },

    setLeadingMoveText: function SVGGraphics_setLeadingMoveText(x, y) {
      this.setLeading(-y);
      this.moveText(x, y);
    },

    addFontStyle: function SVGGraphics_addFontStyle(fontObj) {
      if (!this.cssStyle) {
        this.cssStyle = document.createElementNS(NS, 'svg:style');
        this.cssStyle.setAttributeNS(null, 'type', 'text/css');
        this.defs.appendChild(this.cssStyle);
      }

      var url = createObjectURL(fontObj.data, fontObj.mimetype,
                                this.forceDataSchema);
      this.cssStyle.textContent +=
        '@font-face { font-family: "' + fontObj.loadedName + '";' +
        ' src: url(' + url + '); }\n';
    },

    setFont: function SVGGraphics_setFont(details) {
      var current = this.current;
      var fontObj = this.commonObjs.get(details[0]);
      var size = details[1];
      this.current.font = fontObj;

      if (this.embedFonts && fontObj.data &&
          !this.embeddedFonts[fontObj.loadedName]) {
        this.addFontStyle(fontObj);
        this.embeddedFonts[fontObj.loadedName] = fontObj;
      }

      current.fontMatrix = (fontObj.fontMatrix ?
                            fontObj.fontMatrix : FONT_IDENTITY_MATRIX);

      var bold = fontObj.black ? (fontObj.bold ? 'bolder' : 'bold') :
                                 (fontObj.bold ? 'bold' : 'normal');
      var italic = fontObj.italic ? 'italic' : 'normal';

      if (size < 0) {
        size = -size;
        current.fontDirection = -1;
      } else {
        current.fontDirection = 1;
      }
      current.fontSize = size;
      current.fontFamily = fontObj.loadedName;
      current.fontWeight = bold;
      current.fontStyle = italic;

      current.tspan = document.createElementNS(NS, 'svg:tspan');
      current.tspan.setAttributeNS(null, 'y', pf(-current.y));
      current.xcoords = [];
    },

    endText: function SVGGraphics_endText() {
      if (this.current.pendingClip) {
        this.cgrp.appendChild(this.tgrp);
        this.pgrp.appendChild(this.cgrp);
      } else {
        this.pgrp.appendChild(this.tgrp);
      }
      this.tgrp = document.createElementNS(NS, 'svg:g');
      this.tgrp.setAttributeNS(null, 'transform', pm(this.transformMatrix));
    },

    // Path properties
    setLineWidth: function SVGGraphics_setLineWidth(width) {
      this.current.lineWidth = width;
    },
    setLineCap: function SVGGraphics_setLineCap(style) {
      this.current.lineCap = LINE_CAP_STYLES[style];
    },
    setLineJoin: function SVGGraphics_setLineJoin(style) {
      this.current.lineJoin = LINE_JOIN_STYLES[style];
    },
    setMiterLimit: function SVGGraphics_setMiterLimit(limit) {
      this.current.miterLimit = limit;
    },
    setStrokeRGBColor: function SVGGraphics_setStrokeRGBColor(r, g, b) {
      var color = Util.makeCssRgb(r, g, b);
      this.current.strokeColor = color;
    },
    setFillRGBColor: function SVGGraphics_setFillRGBColor(r, g, b) {
      var color = Util.makeCssRgb(r, g, b);
      this.current.fillColor = color;
      this.current.tspan = document.createElementNS(NS, 'svg:tspan');
      this.current.xcoords = [];
    },
    setDash: function SVGGraphics_setDash(dashArray, dashPhase) {
      this.current.dashArray = dashArray;
      this.current.dashPhase = dashPhase;
    },

    constructPath: function SVGGraphics_constructPath(ops, args) {
      var current = this.current;
      var x = current.x, y = current.y;
      current.path = document.createElementNS(NS, 'svg:path');
      var d = [];
      var opLength = ops.length;

      for (var i = 0, j = 0; i < opLength; i++) {
        switch (ops[i] | 0) {
          case OPS.rectangle:
            x = args[j++];
            y = args[j++];
            var width = args[j++];
            var height = args[j++];
            var xw = x + width;
            var yh = y + height;
            d.push('M', pf(x), pf(y), 'L', pf(xw) , pf(y), 'L', pf(xw), pf(yh),
                   'L', pf(x), pf(yh), 'Z');
            break;
          case OPS.moveTo:
            x = args[j++];
            y = args[j++];
            d.push('M', pf(x), pf(y));
            break;
          case OPS.lineTo:
            x = args[j++];
            y = args[j++];
            d.push('L', pf(x) , pf(y));
            break;
          case OPS.curveTo:
            x = args[j + 4];
            y = args[j + 5];
            d.push('C', pf(args[j]), pf(args[j + 1]), pf(args[j + 2]),
                   pf(args[j + 3]), pf(x), pf(y));
            j += 6;
            break;
          case OPS.curveTo2:
            x = args[j + 2];
            y = args[j + 3];
            d.push('C', pf(x), pf(y), pf(args[j]), pf(args[j + 1]),
                   pf(args[j + 2]), pf(args[j + 3]));
            j += 4;
            break;
          case OPS.curveTo3:
            x = args[j + 2];
            y = args[j + 3];
            d.push('C', pf(args[j]), pf(args[j + 1]), pf(x), pf(y),
                   pf(x), pf(y));
            j += 4;
            break;
          case OPS.closePath:
            d.push('Z');
            break;
        }
      }
      current.path.setAttributeNS(null, 'd', d.join(' '));
      current.path.setAttributeNS(null, 'stroke-miterlimit',
                                  pf(current.miterLimit));
      current.path.setAttributeNS(null, 'stroke-linecap', current.lineCap);
      current.path.setAttributeNS(null, 'stroke-linejoin', current.lineJoin);
      current.path.setAttributeNS(null, 'stroke-width',
                                  pf(current.lineWidth) + 'px');
      current.path.setAttributeNS(null, 'stroke-dasharray',
                                  current.dashArray.map(pf).join(' '));
      current.path.setAttributeNS(null, 'stroke-dashoffset',
                                  pf(current.dashPhase) + 'px');
      current.path.setAttributeNS(null, 'fill', 'none');

      this.tgrp.appendChild(current.path);
      if (current.pendingClip) {
        this.cgrp.appendChild(this.tgrp);
        this.pgrp.appendChild(this.cgrp);
      } else {
        this.pgrp.appendChild(this.tgrp);
      }
      // Saving a reference in current.element so that it can be addressed
      // in 'fill' and 'stroke'
      current.element = current.path;
      current.setCurrentPoint(x, y);
    },

    endPath: function SVGGraphics_endPath() {
      var current = this.current;
      if (current.pendingClip) {
        this.cgrp.appendChild(this.tgrp);
        this.pgrp.appendChild(this.cgrp);
      } else {
        this.pgrp.appendChild(this.tgrp);
      }
      this.tgrp = document.createElementNS(NS, 'svg:g');
      this.tgrp.setAttributeNS(null, 'transform', pm(this.transformMatrix));
    },

    clip: function SVGGraphics_clip(type) {
      var current = this.current;
      // Add current path to clipping path
      current.clipId = 'clippath' + clipCount;
      clipCount++;
      this.clippath = document.createElementNS(NS, 'svg:clipPath');
      this.clippath.setAttributeNS(null, 'id', current.clipId);
      var clipElement = current.element.cloneNode();
      if (type === 'evenodd') {
        clipElement.setAttributeNS(null, 'clip-rule', 'evenodd');
      } else {
        clipElement.setAttributeNS(null, 'clip-rule', 'nonzero');
      }
      this.clippath.setAttributeNS(null, 'transform', pm(this.transformMatrix));
      this.clippath.appendChild(clipElement);
      this.defs.appendChild(this.clippath);

      // Create a new group with that attribute
      current.pendingClip = true;
      this.cgrp = document.createElementNS(NS, 'svg:g');
      this.cgrp.setAttributeNS(null, 'clip-path',
                               'url(#' + current.clipId + ')');
      this.pgrp.appendChild(this.cgrp);
    },

    closePath: function SVGGraphics_closePath() {
      var current = this.current;
      var d = current.path.getAttributeNS(null, 'd');
      d += 'Z';
      current.path.setAttributeNS(null, 'd', d);
    },

    setLeading: function SVGGraphics_setLeading(leading) {
      this.current.leading = -leading;
    },

    setTextRise: function SVGGraphics_setTextRise(textRise) {
      this.current.textRise = textRise;
    },

    setHScale: function SVGGraphics_setHScale(scale) {
      this.current.textHScale = scale / 100;
    },

    setGState: function SVGGraphics_setGState(states) {
      for (var i = 0, ii = states.length; i < ii; i++) {
        var state = states[i];
        var key = state[0];
        var value = state[1];

        switch (key) {
          case 'LW':
            this.setLineWidth(value);
            break;
          case 'LC':
            this.setLineCap(value);
            break;
          case 'LJ':
            this.setLineJoin(value);
            break;
          case 'ML':
            this.setMiterLimit(value);
            break;
          case 'D':
            this.setDash(value[0], value[1]);
            break;
          case 'RI':
            break;
          case 'FL':
            break;
          case 'Font':
            this.setFont(value);
            break;
          case 'CA':
            break;
          case 'ca':
            break;
          case 'BM':
            break;
          case 'SMask':
            break;
        }
      }
    },

    fill: function SVGGraphics_fill() {
      var current = this.current;
      current.element.setAttributeNS(null, 'fill', current.fillColor);
    },

    stroke: function SVGGraphics_stroke() {
      var current = this.current;
      current.element.setAttributeNS(null, 'stroke', current.strokeColor);
      current.element.setAttributeNS(null, 'fill', 'none');
    },

    eoFill: function SVGGraphics_eoFill() {
      var current = this.current;
      current.element.setAttributeNS(null, 'fill', current.fillColor);
      current.element.setAttributeNS(null, 'fill-rule', 'evenodd');
    },

    fillStroke: function SVGGraphics_fillStroke() {
      // Order is important since stroke wants fill to be none.
      // First stroke, then if fill needed, it will be overwritten.
      this.stroke();
      this.fill();
    },

    eoFillStroke: function SVGGraphics_eoFillStroke() {
      this.current.element.setAttributeNS(null, 'fill-rule', 'evenodd');
      this.fillStroke();
    },

    closeStroke: function SVGGraphics_closeStroke() {
      this.closePath();
      this.stroke();
    },

    closeFillStroke: function SVGGraphics_closeFillStroke() {
      this.closePath();
      this.fillStroke();
    },

    paintSolidColorImageMask:
        function SVGGraphics_paintSolidColorImageMask() {
      var current = this.current;
      var rect = document.createElementNS(NS, 'svg:rect');
      rect.setAttributeNS(null, 'x', '0');
      rect.setAttributeNS(null, 'y', '0');
      rect.setAttributeNS(null, 'width', '1px');
      rect.setAttributeNS(null, 'height', '1px');
      rect.setAttributeNS(null, 'fill', current.fillColor);
      this.tgrp.appendChild(rect);
    },

    paintJpegXObject: function SVGGraphics_paintJpegXObject(objId, w, h) {
      var current = this.current;
      var imgObj = this.objs.get(objId);
      var imgEl = document.createElementNS(NS, 'svg:image');
      imgEl.setAttributeNS(XLINK_NS, 'xlink:href', imgObj.src);
      imgEl.setAttributeNS(null, 'width', imgObj.width + 'px');
      imgEl.setAttributeNS(null, 'height', imgObj.height + 'px');
      imgEl.setAttributeNS(null, 'x', '0');
      imgEl.setAttributeNS(null, 'y', pf(-h));
      imgEl.setAttributeNS(null, 'transform',
                           'scale(' + pf(1 / w) + ' ' + pf(-1 / h) + ')');

      this.tgrp.appendChild(imgEl);
      if (current.pendingClip) {
        this.cgrp.appendChild(this.tgrp);
        this.pgrp.appendChild(this.cgrp);
      } else {
        this.pgrp.appendChild(this.tgrp);
      }
    },

    paintImageXObject: function SVGGraphics_paintImageXObject(objId) {
      var imgData = this.objs.get(objId);
      if (!imgData) {
        warn('Dependent image isn\'t ready yet');
        return;
      }
      this.paintInlineImageXObject(imgData);
    },

    paintInlineImageXObject:
        function SVGGraphics_paintInlineImageXObject(imgData, mask) {
      var current = this.current;
      var width = imgData.width;
      var height = imgData.height;

      var imgSrc = convertImgDataToPng(imgData, this.forceDataSchema);
      var cliprect = document.createElementNS(NS, 'svg:rect');
      cliprect.setAttributeNS(null, 'x', '0');
      cliprect.setAttributeNS(null, 'y', '0');
      cliprect.setAttributeNS(null, 'width', pf(width));
      cliprect.setAttributeNS(null, 'height', pf(height));
      current.element = cliprect;
      this.clip('nonzero');
      var imgEl = document.createElementNS(NS, 'svg:image');
      imgEl.setAttributeNS(XLINK_NS, 'xlink:href', imgSrc);
      imgEl.setAttributeNS(null, 'x', '0');
      imgEl.setAttributeNS(null, 'y', pf(-height));
      imgEl.setAttributeNS(null, 'width', pf(width) + 'px');
      imgEl.setAttributeNS(null, 'height', pf(height) + 'px');
      imgEl.setAttributeNS(null, 'transform',
                           'scale(' + pf(1 / width) + ' ' +
                           pf(-1 / height) + ')');
      if (mask) {
        mask.appendChild(imgEl);
      } else {
        this.tgrp.appendChild(imgEl);
      }
      if (current.pendingClip) {
        this.cgrp.appendChild(this.tgrp);
        this.pgrp.appendChild(this.cgrp);
      } else {
        this.pgrp.appendChild(this.tgrp);
      }
    },

    paintImageMaskXObject:
        function SVGGraphics_paintImageMaskXObject(imgData) {
      var current = this.current;
      var width = imgData.width;
      var height = imgData.height;
      var fillColor = current.fillColor;

      current.maskId = 'mask' + maskCount++;
      var mask = document.createElementNS(NS, 'svg:mask');
      mask.setAttributeNS(null, 'id', current.maskId);

      var rect = document.createElementNS(NS, 'svg:rect');
      rect.setAttributeNS(null, 'x', '0');
      rect.setAttributeNS(null, 'y', '0');
      rect.setAttributeNS(null, 'width', pf(width));
      rect.setAttributeNS(null, 'height', pf(height));
      rect.setAttributeNS(null, 'fill', fillColor);
      rect.setAttributeNS(null, 'mask', 'url(#' + current.maskId +')');
      this.defs.appendChild(mask);
      this.tgrp.appendChild(rect);

      this.paintInlineImageXObject(imgData, mask);
    },

    paintFormXObjectBegin:
        function SVGGraphics_paintFormXObjectBegin(matrix, bbox) {
      this.save();

      if (isArray(matrix) && matrix.length === 6) {
        this.transform(matrix[0], matrix[1], matrix[2],
                       matrix[3], matrix[4], matrix[5]);
      }

      if (isArray(bbox) && bbox.length === 4) {
        var width = bbox[2] - bbox[0];
        var height = bbox[3] - bbox[1];

        var cliprect = document.createElementNS(NS, 'svg:rect');
        cliprect.setAttributeNS(null, 'x', bbox[0]);
        cliprect.setAttributeNS(null, 'y', bbox[1]);
        cliprect.setAttributeNS(null, 'width', pf(width));
        cliprect.setAttributeNS(null, 'height', pf(height));
        this.current.element = cliprect;
        this.clip('nonzero');
        this.endPath();
      }
    },

    paintFormXObjectEnd:
        function SVGGraphics_paintFormXObjectEnd() {
      this.restore();
    }
  };
  return SVGGraphics;
})();

exports.SVGGraphics = SVGGraphics;
}));


(function (root, factory) {
  {
    factory((root.pdfjsDisplayAnnotationLayer = {}), root.pdfjsSharedUtil,
      root.pdfjsDisplayDOMUtils);
  }
}(this, function (exports, sharedUtil, displayDOMUtils) {

var AnnotationBorderStyleType = sharedUtil.AnnotationBorderStyleType;
var AnnotationType = sharedUtil.AnnotationType;
var Util = sharedUtil.Util;
var addLinkAttributes = displayDOMUtils.addLinkAttributes;
var LinkTarget = displayDOMUtils.LinkTarget;
var getFilenameFromUrl = displayDOMUtils.getFilenameFromUrl;
var warn = sharedUtil.warn;
var CustomStyle = displayDOMUtils.CustomStyle;
var getDefaultSetting = displayDOMUtils.getDefaultSetting;

/**
 * @typedef {Object} AnnotationElementParameters
 * @property {Object} data
 * @property {HTMLDivElement} layer
 * @property {PDFPage} page
 * @property {PageViewport} viewport
 * @property {IPDFLinkService} linkService
 * @property {DownloadManager} downloadManager
 */

/**
 * @class
 * @alias AnnotationElementFactory
 */
function AnnotationElementFactory() {}
AnnotationElementFactory.prototype =
    /** @lends AnnotationElementFactory.prototype */ {
  /**
   * @param {AnnotationElementParameters} parameters
   * @returns {AnnotationElement}
   */
  create: function AnnotationElementFactory_create(parameters) {
    var subtype = parameters.data.annotationType;

    switch (subtype) {
      case AnnotationType.LINK:
        return new LinkAnnotationElement(parameters);

      case AnnotationType.TEXT:
        return new TextAnnotationElement(parameters);

      case AnnotationType.WIDGET:
        return new WidgetAnnotationElement(parameters);

      case AnnotationType.POPUP:
        return new PopupAnnotationElement(parameters);

      case AnnotationType.HIGHLIGHT:
        return new HighlightAnnotationElement(parameters);

      case AnnotationType.UNDERLINE:
        return new UnderlineAnnotationElement(parameters);

      case AnnotationType.SQUIGGLY:
        return new SquigglyAnnotationElement(parameters);

      case AnnotationType.STRIKEOUT:
        return new StrikeOutAnnotationElement(parameters);

      case AnnotationType.FILEATTACHMENT:
        return new FileAttachmentAnnotationElement(parameters);

      default:
        return new AnnotationElement(parameters);
    }
  }
};

/**
 * @class
 * @alias AnnotationElement
 */
var AnnotationElement = (function AnnotationElementClosure() {
  function AnnotationElement(parameters, isRenderable) {
    this.isRenderable = isRenderable || false;
    this.data = parameters.data;
    this.layer = parameters.layer;
    this.page = parameters.page;
    this.viewport = parameters.viewport;
    this.linkService = parameters.linkService;
    this.downloadManager = parameters.downloadManager;
    this.imageResourcesPath = parameters.imageResourcesPath;

    if (isRenderable) {
      this.container = this._createContainer();
    }
  }

  AnnotationElement.prototype = /** @lends AnnotationElement.prototype */ {
    /**
     * Create an empty container for the annotation's HTML element.
     *
     * @private
     * @memberof AnnotationElement
     * @returns {HTMLSectionElement}
     */
    _createContainer: function AnnotationElement_createContainer() {
      var data = this.data, page = this.page, viewport = this.viewport;
      var container = document.createElement('section');
      var width = data.rect[2] - data.rect[0];
      var height = data.rect[3] - data.rect[1];

      container.setAttribute('data-annotation-id', data.id);

      // Do *not* modify `data.rect`, since that will corrupt the annotation
      // position on subsequent calls to `_createContainer` (see issue 6804).
      var rect = Util.normalizeRect([
        data.rect[0],
        page.view[3] - data.rect[1] + page.view[1],
        data.rect[2],
        page.view[3] - data.rect[3] + page.view[1]
      ]);

      CustomStyle.setProp('transform', container,
                          'matrix(' + viewport.transform.join(',') + ')');
      CustomStyle.setProp('transformOrigin', container,
                          -rect[0] + 'px ' + -rect[1] + 'px');

      if (data.borderStyle.width > 0) {
        container.style.borderWidth = data.borderStyle.width + 'px';
        if (data.borderStyle.style !== AnnotationBorderStyleType.UNDERLINE) {
          // Underline styles only have a bottom border, so we do not need
          // to adjust for all borders. This yields a similar result as
          // Adobe Acrobat/Reader.
          width = width - 2 * data.borderStyle.width;
          height = height - 2 * data.borderStyle.width;
        }

        var horizontalRadius = data.borderStyle.horizontalCornerRadius;
        var verticalRadius = data.borderStyle.verticalCornerRadius;
        if (horizontalRadius > 0 || verticalRadius > 0) {
          var radius = horizontalRadius + 'px / ' + verticalRadius + 'px';
          CustomStyle.setProp('borderRadius', container, radius);
        }

        switch (data.borderStyle.style) {
          case AnnotationBorderStyleType.SOLID:
            container.style.borderStyle = 'solid';
            break;

          case AnnotationBorderStyleType.DASHED:
            container.style.borderStyle = 'dashed';
            break;

          case AnnotationBorderStyleType.BEVELED:
            warn('Unimplemented border style: beveled');
            break;

          case AnnotationBorderStyleType.INSET:
            warn('Unimplemented border style: inset');
            break;

          case AnnotationBorderStyleType.UNDERLINE:
            container.style.borderBottomStyle = 'solid';
            break;

          default:
            break;
        }

        if (data.color) {
          container.style.borderColor =
            Util.makeCssRgb(data.color[0] | 0,
                            data.color[1] | 0,
                            data.color[2] | 0);
        } else {
          // Transparent (invisible) border, so do not draw it at all.
          container.style.borderWidth = 0;
        }
      }

      container.style.left = rect[0] + 'px';
      container.style.top = rect[1] + 'px';

      container.style.width = width + 'px';
      container.style.height = height + 'px';

      return container;
    },

    /**
     * Create a popup for the annotation's HTML element. This is used for
     * annotations that do not have a Popup entry in the dictionary, but
     * are of a type that works with popups (such as Highlight annotations).
     *
     * @private
     * @param {HTMLSectionElement} container
     * @param {HTMLDivElement|HTMLImageElement|null} trigger
     * @param {Object} data
     * @memberof AnnotationElement
     */
    _createPopup:
        function AnnotationElement_createPopup(container, trigger, data) {
      // If no trigger element is specified, create it.
      if (!trigger) {
        trigger = document.createElement('div');
        trigger.style.height = container.style.height;
        trigger.style.width = container.style.width;
        container.appendChild(trigger);
      }

      var popupElement = new PopupElement({
        container: container,
        trigger: trigger,
        color: data.color,
        title: data.title,
        contents: data.contents,
        hideWrapper: true
      });
      var popup = popupElement.render();

      // Position the popup next to the annotation's container.
      popup.style.left = container.style.width;

      container.appendChild(popup);
    },

    /**
     * Render the annotation's HTML element in the empty container.
     *
     * @public
     * @memberof AnnotationElement
     */
    render: function AnnotationElement_render() {
      throw new Error('Abstract method AnnotationElement.render called');
    }
  };

  return AnnotationElement;
})();

/**
 * @class
 * @alias LinkAnnotationElement
 */
var LinkAnnotationElement = (function LinkAnnotationElementClosure() {
  function LinkAnnotationElement(parameters) {
    AnnotationElement.call(this, parameters, true);
  }

  Util.inherit(LinkAnnotationElement, AnnotationElement, {
    /**
     * Render the link annotation's HTML element in the empty container.
     *
     * @public
     * @memberof LinkAnnotationElement
     * @returns {HTMLSectionElement}
     */
    render: function LinkAnnotationElement_render() {
      this.container.className = 'linkAnnotation';

      var link = document.createElement('a');
      addLinkAttributes(link, {
        url: this.data.url,
        target: (this.data.newWindow ? LinkTarget.BLANK : undefined),
      });

      if (!this.data.url) {
        if (this.data.action) {
          this._bindNamedAction(link, this.data.action);
        } else {
          this._bindLink(link, (this.data.dest || null));
        }
      }

      this.container.appendChild(link);
      return this.container;
    },

    /**
     * Bind internal links to the link element.
     *
     * @private
     * @param {Object} link
     * @param {Object} destination
     * @memberof LinkAnnotationElement
     */
    _bindLink: function LinkAnnotationElement_bindLink(link, destination) {
      var self = this;

      link.href = this.linkService.getDestinationHash(destination);
      link.onclick = function() {
        if (destination) {
          self.linkService.navigateTo(destination);
        }
        return false;
      };
      if (destination) {
        link.className = 'internalLink';
      }
    },

    /**
     * Bind named actions to the link element.
     *
     * @private
     * @param {Object} link
     * @param {Object} action
     * @memberof LinkAnnotationElement
     */
    _bindNamedAction:
        function LinkAnnotationElement_bindNamedAction(link, action) {
      var self = this;

      link.href = this.linkService.getAnchorUrl('');
      link.onclick = function() {
        self.linkService.executeNamedAction(action);
        return false;
      };
      link.className = 'internalLink';
    }
  });

  return LinkAnnotationElement;
})();

/**
 * @class
 * @alias TextAnnotationElement
 */
var TextAnnotationElement = (function TextAnnotationElementClosure() {
  function TextAnnotationElement(parameters) {
    var isRenderable = !!(parameters.data.hasPopup ||
                          parameters.data.title || parameters.data.contents);
    AnnotationElement.call(this, parameters, isRenderable);
  }

  Util.inherit(TextAnnotationElement, AnnotationElement, {
    /**
     * Render the text annotation's HTML element in the empty container.
     *
     * @public
     * @memberof TextAnnotationElement
     * @returns {HTMLSectionElement}
     */
    render: function TextAnnotationElement_render() {
      this.container.className = 'textAnnotation';

      var image = document.createElement('img');
      image.style.height = this.container.style.height;
      image.style.width = this.container.style.width;
      image.src = this.imageResourcesPath + 'annotation-' +
        this.data.name.toLowerCase() + '.svg';
      image.alt = '[{{type}} Annotation]';
      image.dataset.l10nId = 'text_annotation_type';
      image.dataset.l10nArgs = JSON.stringify({type: this.data.name});

      if (!this.data.hasPopup) {
        this._createPopup(this.container, image, this.data);
      }

      this.container.appendChild(image);
      return this.container;
    }
  });

  return TextAnnotationElement;
})();

/**
 * @class
 * @alias WidgetAnnotationElement
 */
var WidgetAnnotationElement = (function WidgetAnnotationElementClosure() {
  function WidgetAnnotationElement(parameters) {
    var isRenderable = !parameters.data.hasAppearance &&
                       !!parameters.data.fieldValue;
    AnnotationElement.call(this, parameters, isRenderable);
  }

  Util.inherit(WidgetAnnotationElement, AnnotationElement, {
    /**
     * Render the widget annotation's HTML element in the empty container.
     *
     * @public
     * @memberof WidgetAnnotationElement
     * @returns {HTMLSectionElement}
     */
    render: function WidgetAnnotationElement_render() {
      var content = document.createElement('div');
      content.textContent = this.data.fieldValue;
      var textAlignment = this.data.textAlignment;
      content.style.textAlign = ['left', 'center', 'right'][textAlignment];
      content.style.verticalAlign = 'middle';
      content.style.display = 'table-cell';

      var font = (this.data.fontRefName ?
        this.page.commonObjs.getData(this.data.fontRefName) : null);
      this._setTextStyle(content, font);

      this.container.appendChild(content);
      return this.container;
    },

    /**
     * Apply text styles to the text in the element.
     *
     * @private
     * @param {HTMLDivElement} element
     * @param {Object} font
     * @memberof WidgetAnnotationElement
     */
    _setTextStyle:
        function WidgetAnnotationElement_setTextStyle(element, font) {
      // TODO: This duplicates some of the logic in CanvasGraphics.setFont().
      var style = element.style;
      style.fontSize = this.data.fontSize + 'px';
      style.direction = (this.data.fontDirection < 0 ? 'rtl': 'ltr');

      if (!font) {
        return;
      }

      style.fontWeight = (font.black ?
        (font.bold ? '900' : 'bold') :
        (font.bold ? 'bold' : 'normal'));
      style.fontStyle = (font.italic ? 'italic' : 'normal');

      // Use a reasonable default font if the font doesn't specify a fallback.
      var fontFamily = font.loadedName ? '"' + font.loadedName + '", ' : '';
      var fallbackName = font.fallbackName || 'Helvetica, sans-serif';
      style.fontFamily = fontFamily + fallbackName;
    }
  });

  return WidgetAnnotationElement;
})();

/**
 * @class
 * @alias PopupAnnotationElement
 */
var PopupAnnotationElement = (function PopupAnnotationElementClosure() {
  function PopupAnnotationElement(parameters) {
    var isRenderable = !!(parameters.data.title || parameters.data.contents);
    AnnotationElement.call(this, parameters, isRenderable);
  }

  Util.inherit(PopupAnnotationElement, AnnotationElement, {
    /**
     * Render the popup annotation's HTML element in the empty container.
     *
     * @public
     * @memberof PopupAnnotationElement
     * @returns {HTMLSectionElement}
     */
    render: function PopupAnnotationElement_render() {
      this.container.className = 'popupAnnotation';

      var selector = '[data-annotation-id="' + this.data.parentId + '"]';
      var parentElement = this.layer.querySelector(selector);
      if (!parentElement) {
        return this.container;
      }

      var popup = new PopupElement({
        container: this.container,
        trigger: parentElement,
        color: this.data.color,
        title: this.data.title,
        contents: this.data.contents
      });

      // Position the popup next to the parent annotation's container.
      // PDF viewers ignore a popup annotation's rectangle.
      var parentLeft = parseFloat(parentElement.style.left);
      var parentWidth = parseFloat(parentElement.style.width);
      CustomStyle.setProp('transformOrigin', this.container,
                          -(parentLeft + parentWidth) + 'px -' +
                          parentElement.style.top);
      this.container.style.left = (parentLeft + parentWidth) + 'px';

      this.container.appendChild(popup.render());
      return this.container;
    }
  });

  return PopupAnnotationElement;
})();

/**
 * @class
 * @alias PopupElement
 */
var PopupElement = (function PopupElementClosure() {
  var BACKGROUND_ENLIGHT = 0.7;

  function PopupElement(parameters) {
    this.container = parameters.container;
    this.trigger = parameters.trigger;
    this.color = parameters.color;
    this.title = parameters.title;
    this.contents = parameters.contents;
    this.hideWrapper = parameters.hideWrapper || false;

    this.pinned = false;
  }

  PopupElement.prototype = /** @lends PopupElement.prototype */ {
    /**
     * Render the popup's HTML element.
     *
     * @public
     * @memberof PopupElement
     * @returns {HTMLSectionElement}
     */
    render: function PopupElement_render() {
      var wrapper = document.createElement('div');
      wrapper.className = 'popupWrapper';

      // For Popup annotations we hide the entire section because it contains
      // only the popup. However, for Text annotations without a separate Popup
      // annotation, we cannot hide the entire container as the image would
      // disappear too. In that special case, hiding the wrapper suffices.
      this.hideElement = (this.hideWrapper ? wrapper : this.container);
      this.hideElement.setAttribute('hidden', true);

      var popup = document.createElement('div');
      popup.className = 'popup';

      var color = this.color;
      if (color) {
        // Enlighten the color.
        var r = BACKGROUND_ENLIGHT * (255 - color[0]) + color[0];
        var g = BACKGROUND_ENLIGHT * (255 - color[1]) + color[1];
        var b = BACKGROUND_ENLIGHT * (255 - color[2]) + color[2];
        popup.style.backgroundColor = Util.makeCssRgb(r | 0, g | 0, b | 0);
      }

      var contents = this._formatContents(this.contents);
      var title = document.createElement('h1');
      title.textContent = this.title;

      // Attach the event listeners to the trigger element.
      this.trigger.addEventListener('click', this._toggle.bind(this));
      this.trigger.addEventListener('mouseover', this._show.bind(this, false));
      this.trigger.addEventListener('mouseout', this._hide.bind(this, false));
      popup.addEventListener('click', this._hide.bind(this, true));

      popup.appendChild(title);
      popup.appendChild(contents);
      wrapper.appendChild(popup);
      return wrapper;
    },

    /**
     * Format the contents of the popup by adding newlines where necessary.
     *
     * @private
     * @param {string} contents
     * @memberof PopupElement
     * @returns {HTMLParagraphElement}
     */
    _formatContents: function PopupElement_formatContents(contents) {
      var p = document.createElement('p');
      var lines = contents.split(/(?:\r\n?|\n)/);
      for (var i = 0, ii = lines.length; i < ii; ++i) {
        var line = lines[i];
        p.appendChild(document.createTextNode(line));
        if (i < (ii - 1)) {
          p.appendChild(document.createElement('br'));
        }
      }
      return p;
    },

    /**
     * Toggle the visibility of the popup.
     *
     * @private
     * @memberof PopupElement
     */
    _toggle: function PopupElement_toggle() {
      if (this.pinned) {
        this._hide(true);
      } else {
        this._show(true);
      }
    },

    /**
     * Show the popup.
     *
     * @private
     * @param {boolean} pin
     * @memberof PopupElement
     */
    _show: function PopupElement_show(pin) {
      if (pin) {
        this.pinned = true;
      }
      if (this.hideElement.hasAttribute('hidden')) {
        this.hideElement.removeAttribute('hidden');
        this.container.style.zIndex += 1;
      }
    },

    /**
     * Hide the popup.
     *
     * @private
     * @param {boolean} unpin
     * @memberof PopupElement
     */
    _hide: function PopupElement_hide(unpin) {
      if (unpin) {
        this.pinned = false;
      }
      if (!this.hideElement.hasAttribute('hidden') && !this.pinned) {
        this.hideElement.setAttribute('hidden', true);
        this.container.style.zIndex -= 1;
      }
    }
  };

  return PopupElement;
})();

/**
 * @class
 * @alias HighlightAnnotationElement
 */
var HighlightAnnotationElement = (
    function HighlightAnnotationElementClosure() {
  function HighlightAnnotationElement(parameters) {
    var isRenderable = !!(parameters.data.hasPopup ||
                          parameters.data.title || parameters.data.contents);
    AnnotationElement.call(this, parameters, isRenderable);
  }

  Util.inherit(HighlightAnnotationElement, AnnotationElement, {
    /**
     * Render the highlight annotation's HTML element in the empty container.
     *
     * @public
     * @memberof HighlightAnnotationElement
     * @returns {HTMLSectionElement}
     */
    render: function HighlightAnnotationElement_render() {
      this.container.className = 'highlightAnnotation';

      if (!this.data.hasPopup) {
        this._createPopup(this.container, null, this.data);
      }

      return this.container;
    }
  });

  return HighlightAnnotationElement;
})();

/**
 * @class
 * @alias UnderlineAnnotationElement
 */
var UnderlineAnnotationElement = (
    function UnderlineAnnotationElementClosure() {
  function UnderlineAnnotationElement(parameters) {
    var isRenderable = !!(parameters.data.hasPopup ||
                          parameters.data.title || parameters.data.contents);
    AnnotationElement.call(this, parameters, isRenderable);
  }

  Util.inherit(UnderlineAnnotationElement, AnnotationElement, {
    /**
     * Render the underline annotation's HTML element in the empty container.
     *
     * @public
     * @memberof UnderlineAnnotationElement
     * @returns {HTMLSectionElement}
     */
    render: function UnderlineAnnotationElement_render() {
      this.container.className = 'underlineAnnotation';

      if (!this.data.hasPopup) {
        this._createPopup(this.container, null, this.data);
      }

      return this.container;
    }
  });

  return UnderlineAnnotationElement;
})();

/**
 * @class
 * @alias SquigglyAnnotationElement
 */
var SquigglyAnnotationElement = (function SquigglyAnnotationElementClosure() {
  function SquigglyAnnotationElement(parameters) {
    var isRenderable = !!(parameters.data.hasPopup ||
                          parameters.data.title || parameters.data.contents);
    AnnotationElement.call(this, parameters, isRenderable);
  }

  Util.inherit(SquigglyAnnotationElement, AnnotationElement, {
    /**
     * Render the squiggly annotation's HTML element in the empty container.
     *
     * @public
     * @memberof SquigglyAnnotationElement
     * @returns {HTMLSectionElement}
     */
    render: function SquigglyAnnotationElement_render() {
      this.container.className = 'squigglyAnnotation';

      if (!this.data.hasPopup) {
        this._createPopup(this.container, null, this.data);
      }

      return this.container;
    }
  });

  return SquigglyAnnotationElement;
})();

/**
 * @class
 * @alias StrikeOutAnnotationElement
 */
var StrikeOutAnnotationElement = (
    function StrikeOutAnnotationElementClosure() {
  function StrikeOutAnnotationElement(parameters) {
    var isRenderable = !!(parameters.data.hasPopup ||
                          parameters.data.title || parameters.data.contents);
    AnnotationElement.call(this, parameters, isRenderable);
  }

  Util.inherit(StrikeOutAnnotationElement, AnnotationElement, {
    /**
     * Render the strikeout annotation's HTML element in the empty container.
     *
     * @public
     * @memberof StrikeOutAnnotationElement
     * @returns {HTMLSectionElement}
     */
    render: function StrikeOutAnnotationElement_render() {
      this.container.className = 'strikeoutAnnotation';

      if (!this.data.hasPopup) {
        this._createPopup(this.container, null, this.data);
      }

      return this.container;
    }
  });

  return StrikeOutAnnotationElement;
})();

/**
 * @class
 * @alias FileAttachmentAnnotationElement
 */
var FileAttachmentAnnotationElement = (
    function FileAttachmentAnnotationElementClosure() {
  function FileAttachmentAnnotationElement(parameters) {
    AnnotationElement.call(this, parameters, true);

    this.filename = getFilenameFromUrl(parameters.data.file.filename);
    this.content = parameters.data.file.content;
  }

  Util.inherit(FileAttachmentAnnotationElement, AnnotationElement, {
    /**
     * Render the file attachment annotation's HTML element in the empty
     * container.
     *
     * @public
     * @memberof FileAttachmentAnnotationElement
     * @returns {HTMLSectionElement}
     */
    render: function FileAttachmentAnnotationElement_render() {
      this.container.className = 'fileAttachmentAnnotation';

      var trigger = document.createElement('div');
      trigger.style.height = this.container.style.height;
      trigger.style.width = this.container.style.width;
      trigger.addEventListener('dblclick', this._download.bind(this));

      if (!this.data.hasPopup && (this.data.title || this.data.contents)) {
        this._createPopup(this.container, trigger, this.data);
      }

      this.container.appendChild(trigger);
      return this.container;
    },

    /**
     * Download the file attachment associated with this annotation.
     *
     * @private
     * @memberof FileAttachmentAnnotationElement
     */
    _download: function FileAttachmentAnnotationElement_download() {
      if (!this.downloadManager) {
        warn('Download cannot be started due to unavailable download manager');
        return;
      }
      this.downloadManager.downloadData(this.content, this.filename, '');
    }
  });

  return FileAttachmentAnnotationElement;
})();

/**
 * @typedef {Object} AnnotationLayerParameters
 * @property {PageViewport} viewport
 * @property {HTMLDivElement} div
 * @property {Array} annotations
 * @property {PDFPage} page
 * @property {IPDFLinkService} linkService
 * @property {string} imageResourcesPath
 */

/**
 * @class
 * @alias AnnotationLayer
 */
var AnnotationLayer = (function AnnotationLayerClosure() {
  return {
    /**
     * Render a new annotation layer with all annotation elements.
     *
     * @public
     * @param {AnnotationLayerParameters} parameters
     * @memberof AnnotationLayer
     */
    render: function AnnotationLayer_render(parameters) {
      var annotationElementFactory = new AnnotationElementFactory();

      for (var i = 0, ii = parameters.annotations.length; i < ii; i++) {
        var data = parameters.annotations[i];
        if (!data) {
          continue;
        }

        var properties = {
          data: data,
          layer: parameters.div,
          page: parameters.page,
          viewport: parameters.viewport,
          linkService: parameters.linkService,
          downloadManager: parameters.downloadManager,
          imageResourcesPath: parameters.imageResourcesPath ||
                              getDefaultSetting('imageResourcesPath')
        };
        var element = annotationElementFactory.create(properties);
        if (element.isRenderable) {
          parameters.div.appendChild(element.render());
        }
      }
    },

    /**
     * Update the annotation elements on existing annotation layer.
     *
     * @public
     * @param {AnnotationLayerParameters} parameters
     * @memberof AnnotationLayer
     */
    update: function AnnotationLayer_update(parameters) {
      for (var i = 0, ii = parameters.annotations.length; i < ii; i++) {
        var data = parameters.annotations[i];
        var element = parameters.div.querySelector(
          '[data-annotation-id="' + data.id + '"]');
        if (element) {
          CustomStyle.setProp('transform', element,
            'matrix(' + parameters.viewport.transform.join(',') + ')');
        }
      }
      parameters.div.removeAttribute('hidden');
    }
  };
})();

exports.AnnotationLayer = AnnotationLayer;
}));


(function (root, factory) {
  {
    factory((root.pdfjsDisplayTextLayer = {}), root.pdfjsSharedUtil,
      root.pdfjsDisplayDOMUtils);
  }
}(this, function (exports, sharedUtil, displayDOMUtils) {

var Util = sharedUtil.Util;
var createPromiseCapability = sharedUtil.createPromiseCapability;
var CustomStyle = displayDOMUtils.CustomStyle;
var getDefaultSetting = displayDOMUtils.getDefaultSetting;

/**
 * Text layer render parameters.
 *
 * @typedef {Object} TextLayerRenderParameters
 * @property {TextContent} textContent - Text content to render (the object is
 *   returned by the page's getTextContent() method).
 * @property {HTMLElement} container - HTML element that will contain text runs.
 * @property {PageViewport} viewport - The target viewport to properly
 *   layout the text runs.
 * @property {Array} textDivs - (optional) HTML elements that are correspond
 *   the text items of the textContent input. This is output and shall be
 *   initially be set to empty array.
 * @property {number} timeout - (optional) Delay in milliseconds before
 *   rendering of the text  runs occurs.
 */
var renderTextLayer = (function renderTextLayerClosure() {
  var MAX_TEXT_DIVS_TO_RENDER = 100000;

  var NonWhitespaceRegexp = /\S/;

  function isAllWhitespace(str) {
    return !NonWhitespaceRegexp.test(str);
  }

  function appendText(textDivs, viewport, geom, styles) {
    var style = styles[geom.fontName];
    var textDiv = document.createElement('div');
    textDivs.push(textDiv);
    if (isAllWhitespace(geom.str)) {
      textDiv.dataset.isWhitespace = true;
      return;
    }
    var tx = Util.transform(viewport.transform, geom.transform);
    var angle = Math.atan2(tx[1], tx[0]);
    if (style.vertical) {
      angle += Math.PI / 2;
    }
    var fontHeight = Math.sqrt((tx[2] * tx[2]) + (tx[3] * tx[3]));
    var fontAscent = fontHeight;
    if (style.ascent) {
      fontAscent = style.ascent * fontAscent;
    } else if (style.descent) {
      fontAscent = (1 + style.descent) * fontAscent;
    }

    var left;
    var top;
    if (angle === 0) {
      left = tx[4];
      top = tx[5] - fontAscent;
    } else {
      left = tx[4] + (fontAscent * Math.sin(angle));
      top = tx[5] - (fontAscent * Math.cos(angle));
    }
    textDiv.style.left = left + 'px';
    textDiv.style.top = top + 'px';
    textDiv.style.fontSize = fontHeight + 'px';
    textDiv.style.fontFamily = style.fontFamily;

    textDiv.textContent = geom.str;
    // |fontName| is only used by the Font Inspector. This test will succeed
    // when e.g. the Font Inspector is off but the Stepper is on, but it's
    // not worth the effort to do a more accurate test.
    if (getDefaultSetting('pdfBug')) {
      textDiv.dataset.fontName = geom.fontName;
    }
    // Storing into dataset will convert number into string.
    if (angle !== 0) {
      textDiv.dataset.angle = angle * (180 / Math.PI);
    }
    // We don't bother scaling single-char text divs, because it has very
    // little effect on text highlighting. This makes scrolling on docs with
    // lots of such divs a lot faster.
    if (geom.str.length > 1) {
      if (style.vertical) {
        textDiv.dataset.canvasWidth = geom.height * viewport.scale;
      } else {
        textDiv.dataset.canvasWidth = geom.width * viewport.scale;
      }
    }
  }

  function render(task) {
    if (task._canceled) {
      return;
    }
    var textLayerFrag = task._container;
    var textDivs = task._textDivs;
    var capability = task._capability;
    var textDivsLength = textDivs.length;

    // No point in rendering many divs as it would make the browser
    // unusable even after the divs are rendered.
    if (textDivsLength > MAX_TEXT_DIVS_TO_RENDER) {
      capability.resolve();
      return;
    }

    var canvas = document.createElement('canvas');
    canvas.mozOpaque = true;
    var ctx = canvas.getContext('2d', {alpha: false});

    var lastFontSize;
    var lastFontFamily;
    for (var i = 0; i < textDivsLength; i++) {
      var textDiv = textDivs[i];
      if (textDiv.dataset.isWhitespace !== undefined) {
        continue;
      }

      var fontSize = textDiv.style.fontSize;
      var fontFamily = textDiv.style.fontFamily;

      // Only build font string and set to context if different from last.
      if (fontSize !== lastFontSize || fontFamily !== lastFontFamily) {
        ctx.font = fontSize + ' ' + fontFamily;
        lastFontSize = fontSize;
        lastFontFamily = fontFamily;
      }

      var width = ctx.measureText(textDiv.textContent).width;
      textLayerFrag.appendChild(textDiv);
      var transform;
      if (textDiv.dataset.canvasWidth !== undefined && width > 0) {
        // Dataset values come of type string.
        var textScale = textDiv.dataset.canvasWidth / width;
        transform = 'scaleX(' + textScale + ')';
      } else {
        transform = '';
      }
      var rotation = textDiv.dataset.angle;
      if (rotation) {
        transform = 'rotate(' + rotation + 'deg) ' + transform;
      }
      if (transform) {
        CustomStyle.setProp('transform' , textDiv, transform);
      }
    }
    capability.resolve();
  }

  /**
   * Text layer rendering task.
   *
   * @param {TextContent} textContent
   * @param {HTMLElement} container
   * @param {PageViewport} viewport
   * @param {Array} textDivs
   * @private
   */
  function TextLayerRenderTask(textContent, container, viewport, textDivs) {
    this._textContent = textContent;
    this._container = container;
    this._viewport = viewport;
    textDivs = textDivs || [];
    this._textDivs = textDivs;
    this._canceled = false;
    this._capability = createPromiseCapability();
    this._renderTimer = null;
  }
  TextLayerRenderTask.prototype = {
    get promise() {
      return this._capability.promise;
    },

    cancel: function TextLayer_cancel() {
      this._canceled = true;
      if (this._renderTimer !== null) {
        clearTimeout(this._renderTimer);
        this._renderTimer = null;
      }
      this._capability.reject('canceled');
    },

    _render: function TextLayer_render(timeout) {
      var textItems = this._textContent.items;
      var styles = this._textContent.styles;
      var textDivs = this._textDivs;
      var viewport = this._viewport;
      for (var i = 0, len = textItems.length; i < len; i++) {
        appendText(textDivs, viewport, textItems[i], styles);
      }

      if (!timeout) { // Render right away
        render(this);
      } else { // Schedule
        var self = this;
        this._renderTimer = setTimeout(function() {
          render(self);
          self._renderTimer = null;
        }, timeout);
      }
    }
  };


  /**
   * Starts rendering of the text layer.
   *
   * @param {TextLayerRenderParameters} renderParameters
   * @returns {TextLayerRenderTask}
   */
  function renderTextLayer(renderParameters) {
    var task = new TextLayerRenderTask(renderParameters.textContent,
                                       renderParameters.container,
                                       renderParameters.viewport,
                                       renderParameters.textDivs);
    task._render(renderParameters.timeout);
    return task;
  }

  return renderTextLayer;
})();

exports.renderTextLayer = renderTextLayer;
}));


(function (root, factory) {
  {
    factory((root.pdfjsDisplayWebGL = {}), root.pdfjsSharedUtil,
      root.pdfjsDisplayDOMUtils);
  }
}(this, function (exports, sharedUtil, displayDOMUtils) {

var shadow = sharedUtil.shadow;
var getDefaultSetting = displayDOMUtils.getDefaultSetting;

var WebGLUtils = (function WebGLUtilsClosure() {
  function loadShader(gl, code, shaderType) {
    var shader = gl.createShader(shaderType);
    gl.shaderSource(shader, code);
    gl.compileShader(shader);
    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!compiled) {
      var errorMsg = gl.getShaderInfoLog(shader);
      throw new Error('Error during shader compilation: ' + errorMsg);
    }
    return shader;
  }
  function createVertexShader(gl, code) {
    return loadShader(gl, code, gl.VERTEX_SHADER);
  }
  function createFragmentShader(gl, code) {
    return loadShader(gl, code, gl.FRAGMENT_SHADER);
  }
  function createProgram(gl, shaders) {
    var program = gl.createProgram();
    for (var i = 0, ii = shaders.length; i < ii; ++i) {
      gl.attachShader(program, shaders[i]);
    }
    gl.linkProgram(program);
    var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!linked) {
      var errorMsg = gl.getProgramInfoLog(program);
      throw new Error('Error during program linking: ' + errorMsg);
    }
    return program;
  }
  function createTexture(gl, image, textureId) {
    gl.activeTexture(textureId);
    var texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);

    // Set the parameters so we can render any size image.
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

    // Upload the image into the texture.
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    return texture;
  }

  var currentGL, currentCanvas;
  function generateGL() {
    if (currentGL) {
      return;
    }
    currentCanvas = document.createElement('canvas');
    currentGL = currentCanvas.getContext('webgl',
      { premultipliedalpha: false });
  }

  var smaskVertexShaderCode = '\
  attribute vec2 a_position;                                    \
  attribute vec2 a_texCoord;                                    \
                                                                \
  uniform vec2 u_resolution;                                    \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;   \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_texCoord = a_texCoord;                                    \
  }                                                             ';

  var smaskFragmentShaderCode = '\
  precision mediump float;                                      \
                                                                \
  uniform vec4 u_backdrop;                                      \
  uniform int u_subtype;                                        \
  uniform sampler2D u_image;                                    \
  uniform sampler2D u_mask;                                     \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec4 imageColor = texture2D(u_image, v_texCoord);           \
    vec4 maskColor = texture2D(u_mask, v_texCoord);             \
    if (u_backdrop.a > 0.0) {                                   \
      maskColor.rgb = maskColor.rgb * maskColor.a +             \
                      u_backdrop.rgb * (1.0 - maskColor.a);     \
    }                                                           \
    float lum;                                                  \
    if (u_subtype == 0) {                                       \
      lum = maskColor.a;                                        \
    } else {                                                    \
      lum = maskColor.r * 0.3 + maskColor.g * 0.59 +            \
            maskColor.b * 0.11;                                 \
    }                                                           \
    imageColor.a *= lum;                                        \
    imageColor.rgb *= imageColor.a;                             \
    gl_FragColor = imageColor;                                  \
  }                                                             ';

  var smaskCache = null;

  function initSmaskGL() {
    var canvas, gl;

    generateGL();
    canvas = currentCanvas;
    currentCanvas = null;
    gl = currentGL;
    currentGL = null;

    // setup a GLSL program
    var vertexShader = createVertexShader(gl, smaskVertexShaderCode);
    var fragmentShader = createFragmentShader(gl, smaskFragmentShaderCode);
    var program = createProgram(gl, [vertexShader, fragmentShader]);
    gl.useProgram(program);

    var cache = {};
    cache.gl = gl;
    cache.canvas = canvas;
    cache.resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    cache.positionLocation = gl.getAttribLocation(program, 'a_position');
    cache.backdropLocation = gl.getUniformLocation(program, 'u_backdrop');
    cache.subtypeLocation = gl.getUniformLocation(program, 'u_subtype');

    var texCoordLocation = gl.getAttribLocation(program, 'a_texCoord');
    var texLayerLocation = gl.getUniformLocation(program, 'u_image');
    var texMaskLocation = gl.getUniformLocation(program, 'u_mask');

    // provide texture coordinates for the rectangle.
    var texCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      0.0,  0.0,
      1.0,  0.0,
      0.0,  1.0,
      0.0,  1.0,
      1.0,  0.0,
      1.0,  1.0]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(texCoordLocation);
    gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);

    gl.uniform1i(texLayerLocation, 0);
    gl.uniform1i(texMaskLocation, 1);

    smaskCache = cache;
  }

  function composeSMask(layer, mask, properties) {
    var width = layer.width, height = layer.height;

    if (!smaskCache) {
      initSmaskGL();
    }
    var cache = smaskCache,canvas = cache.canvas, gl = cache.gl;
    canvas.width = width;
    canvas.height = height;
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.uniform2f(cache.resolutionLocation, width, height);

    if (properties.backdrop) {
      gl.uniform4f(cache.resolutionLocation, properties.backdrop[0],
                   properties.backdrop[1], properties.backdrop[2], 1);
    } else {
      gl.uniform4f(cache.resolutionLocation, 0, 0, 0, 0);
    }
    gl.uniform1i(cache.subtypeLocation,
                 properties.subtype === 'Luminosity' ? 1 : 0);

    // Create a textures
    var texture = createTexture(gl, layer, gl.TEXTURE0);
    var maskTexture = createTexture(gl, mask, gl.TEXTURE1);


    // Create a buffer and put a single clipspace rectangle in
    // it (2 triangles)
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      0, 0,
      width, 0,
      0, height,
      0, height,
      width, 0,
      width, height]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(cache.positionLocation);
    gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0);

    // draw
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.flush();

    gl.deleteTexture(texture);
    gl.deleteTexture(maskTexture);
    gl.deleteBuffer(buffer);

    return canvas;
  }

  var figuresVertexShaderCode = '\
  attribute vec2 a_position;                                    \
  attribute vec3 a_color;                                       \
                                                                \
  uniform vec2 u_resolution;                                    \
  uniform vec2 u_scale;                                         \
  uniform vec2 u_offset;                                        \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    vec2 position = (a_position + u_offset) * u_scale;          \
    vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;     \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_color = vec4(a_color / 255.0, 1.0);                       \
  }                                                             ';

  var figuresFragmentShaderCode = '\
  precision mediump float;                                      \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    gl_FragColor = v_color;                                     \
  }                                                             ';

  var figuresCache = null;

  function initFiguresGL() {
    var canvas, gl;

    generateGL();
    canvas = currentCanvas;
    currentCanvas = null;
    gl = currentGL;
    currentGL = null;

    // setup a GLSL program
    var vertexShader = createVertexShader(gl, figuresVertexShaderCode);
    var fragmentShader = createFragmentShader(gl, figuresFragmentShaderCode);
    var program = createProgram(gl, [vertexShader, fragmentShader]);
    gl.useProgram(program);

    var cache = {};
    cache.gl = gl;
    cache.canvas = canvas;
    cache.resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    cache.scaleLocation = gl.getUniformLocation(program, 'u_scale');
    cache.offsetLocation = gl.getUniformLocation(program, 'u_offset');
    cache.positionLocation = gl.getAttribLocation(program, 'a_position');
    cache.colorLocation = gl.getAttribLocation(program, 'a_color');

    figuresCache = cache;
  }

  function drawFigures(width, height, backgroundColor, figures, context) {
    if (!figuresCache) {
      initFiguresGL();
    }
    var cache = figuresCache, canvas = cache.canvas, gl = cache.gl;

    canvas.width = width;
    canvas.height = height;
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.uniform2f(cache.resolutionLocation, width, height);

    // count triangle points
    var count = 0;
    var i, ii, rows;
    for (i = 0, ii = figures.length; i < ii; i++) {
      switch (figures[i].type) {
        case 'lattice':
          rows = (figures[i].coords.length / figures[i].verticesPerRow) | 0;
          count += (rows - 1) * (figures[i].verticesPerRow - 1) * 6;
          break;
        case 'triangles':
          count += figures[i].coords.length;
          break;
      }
    }
    // transfer data
    var coords = new Float32Array(count * 2);
    var colors = new Uint8Array(count * 3);
    var coordsMap = context.coords, colorsMap = context.colors;
    var pIndex = 0, cIndex = 0;
    for (i = 0, ii = figures.length; i < ii; i++) {
      var figure = figures[i], ps = figure.coords, cs = figure.colors;
      switch (figure.type) {
        case 'lattice':
          var cols = figure.verticesPerRow;
          rows = (ps.length / cols) | 0;
          for (var row = 1; row < rows; row++) {
            var offset = row * cols + 1;
            for (var col = 1; col < cols; col++, offset++) {
              coords[pIndex] = coordsMap[ps[offset - cols - 1]];
              coords[pIndex + 1] = coordsMap[ps[offset - cols - 1] + 1];
              coords[pIndex + 2] = coordsMap[ps[offset - cols]];
              coords[pIndex + 3] = coordsMap[ps[offset - cols] + 1];
              coords[pIndex + 4] = coordsMap[ps[offset - 1]];
              coords[pIndex + 5] = coordsMap[ps[offset - 1] + 1];
              colors[cIndex] = colorsMap[cs[offset - cols - 1]];
              colors[cIndex + 1] = colorsMap[cs[offset - cols - 1] + 1];
              colors[cIndex + 2] = colorsMap[cs[offset - cols - 1] + 2];
              colors[cIndex + 3] = colorsMap[cs[offset - cols]];
              colors[cIndex + 4] = colorsMap[cs[offset - cols] + 1];
              colors[cIndex + 5] = colorsMap[cs[offset - cols] + 2];
              colors[cIndex + 6] = colorsMap[cs[offset - 1]];
              colors[cIndex + 7] = colorsMap[cs[offset - 1] + 1];
              colors[cIndex + 8] = colorsMap[cs[offset - 1] + 2];

              coords[pIndex + 6] = coords[pIndex + 2];
              coords[pIndex + 7] = coords[pIndex + 3];
              coords[pIndex + 8] = coords[pIndex + 4];
              coords[pIndex + 9] = coords[pIndex + 5];
              coords[pIndex + 10] = coordsMap[ps[offset]];
              coords[pIndex + 11] = coordsMap[ps[offset] + 1];
              colors[cIndex + 9] = colors[cIndex + 3];
              colors[cIndex + 10] = colors[cIndex + 4];
              colors[cIndex + 11] = colors[cIndex + 5];
              colors[cIndex + 12] = colors[cIndex + 6];
              colors[cIndex + 13] = colors[cIndex + 7];
              colors[cIndex + 14] = colors[cIndex + 8];
              colors[cIndex + 15] = colorsMap[cs[offset]];
              colors[cIndex + 16] = colorsMap[cs[offset] + 1];
              colors[cIndex + 17] = colorsMap[cs[offset] + 2];
              pIndex += 12;
              cIndex += 18;
            }
          }
          break;
        case 'triangles':
          for (var j = 0, jj = ps.length; j < jj; j++) {
            coords[pIndex] = coordsMap[ps[j]];
            coords[pIndex + 1] = coordsMap[ps[j] + 1];
            colors[cIndex] = colorsMap[cs[j]];
            colors[cIndex + 1] = colorsMap[cs[j] + 1];
            colors[cIndex + 2] = colorsMap[cs[j] + 2];
            pIndex += 2;
            cIndex += 3;
          }
          break;
      }
    }

    // draw
    if (backgroundColor) {
      gl.clearColor(backgroundColor[0] / 255, backgroundColor[1] / 255,
                    backgroundColor[2] / 255, 1.0);
    } else {
      gl.clearColor(0, 0, 0, 0);
    }
    gl.clear(gl.COLOR_BUFFER_BIT);

    var coordsBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, coordsBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, coords, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(cache.positionLocation);
    gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0);

    var colorsBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorsBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(cache.colorLocation);
    gl.vertexAttribPointer(cache.colorLocation, 3, gl.UNSIGNED_BYTE, false,
                           0, 0);

    gl.uniform2f(cache.scaleLocation, context.scaleX, context.scaleY);
    gl.uniform2f(cache.offsetLocation, context.offsetX, context.offsetY);

    gl.drawArrays(gl.TRIANGLES, 0, count);

    gl.flush();

    gl.deleteBuffer(coordsBuffer);
    gl.deleteBuffer(colorsBuffer);

    return canvas;
  }

  function cleanup() {
    if (smaskCache && smaskCache.canvas) {
      smaskCache.canvas.width = 0;
      smaskCache.canvas.height = 0;
    }
    if (figuresCache && figuresCache.canvas) {
      figuresCache.canvas.width = 0;
      figuresCache.canvas.height = 0;
    }
    smaskCache = null;
    figuresCache = null;
  }

  return {
    get isEnabled() {
      if (getDefaultSetting('disableWebGL')) {
        return false;
      }
      var enabled = false;
      try {
        generateGL();
        enabled = !!currentGL;
      } catch (e) { }
      return shadow(this, 'isEnabled', enabled);
    },
    composeSMask: composeSMask,
    drawFigures: drawFigures,
    clear: cleanup
  };
})();

exports.WebGLUtils = WebGLUtils;
}));


(function (root, factory) {
  {
    factory((root.pdfjsDisplayPatternHelper = {}), root.pdfjsSharedUtil,
      root.pdfjsDisplayWebGL);
  }
}(this, function (exports, sharedUtil, displayWebGL) {

var Util = sharedUtil.Util;
var info = sharedUtil.info;
var isArray = sharedUtil.isArray;
var error = sharedUtil.error;
var WebGLUtils = displayWebGL.WebGLUtils;

var ShadingIRs = {};

ShadingIRs.RadialAxial = {
  fromIR: function RadialAxial_fromIR(raw) {
    var type = raw[1];
    var colorStops = raw[2];
    var p0 = raw[3];
    var p1 = raw[4];
    var r0 = raw[5];
    var r1 = raw[6];
    return {
      type: 'Pattern',
      getPattern: function RadialAxial_getPattern(ctx) {
        var grad;
        if (type === 'axial') {
          grad = ctx.createLinearGradient(p0[0], p0[1], p1[0], p1[1]);
        } else if (type === 'radial') {
          grad = ctx.createRadialGradient(p0[0], p0[1], r0, p1[0], p1[1], r1);
        }

        for (var i = 0, ii = colorStops.length; i < ii; ++i) {
          var c = colorStops[i];
          grad.addColorStop(c[0], c[1]);
        }
        return grad;
      }
    };
  }
};

var createMeshCanvas = (function createMeshCanvasClosure() {
  function drawTriangle(data, context, p1, p2, p3, c1, c2, c3) {
    // Very basic Gouraud-shaded triangle rasterization algorithm.
    var coords = context.coords, colors = context.colors;
    var bytes = data.data, rowSize = data.width * 4;
    var tmp;
    if (coords[p1 + 1] > coords[p2 + 1]) {
      tmp = p1; p1 = p2; p2 = tmp; tmp = c1; c1 = c2; c2 = tmp;
    }
    if (coords[p2 + 1] > coords[p3 + 1]) {
      tmp = p2; p2 = p3; p3 = tmp; tmp = c2; c2 = c3; c3 = tmp;
    }
    if (coords[p1 + 1] > coords[p2 + 1]) {
      tmp = p1; p1 = p2; p2 = tmp; tmp = c1; c1 = c2; c2 = tmp;
    }
    var x1 = (coords[p1] + context.offsetX) * context.scaleX;
    var y1 = (coords[p1 + 1] + context.offsetY) * context.scaleY;
    var x2 = (coords[p2] + context.offsetX) * context.scaleX;
    var y2 = (coords[p2 + 1] + context.offsetY) * context.scaleY;
    var x3 = (coords[p3] + context.offsetX) * context.scaleX;
    var y3 = (coords[p3 + 1] + context.offsetY) * context.scaleY;
    if (y1 >= y3) {
      return;
    }
    var c1r = colors[c1], c1g = colors[c1 + 1], c1b = colors[c1 + 2];
    var c2r = colors[c2], c2g = colors[c2 + 1], c2b = colors[c2 + 2];
    var c3r = colors[c3], c3g = colors[c3 + 1], c3b = colors[c3 + 2];

    var minY = Math.round(y1), maxY = Math.round(y3);
    var xa, car, cag, cab;
    var xb, cbr, cbg, cbb;
    var k;
    for (var y = minY; y <= maxY; y++) {
      if (y < y2) {
        k = y < y1 ? 0 : y1 === y2 ? 1 : (y1 - y) / (y1 - y2);
        xa = x1 - (x1 - x2) * k;
        car = c1r - (c1r - c2r) * k;
        cag = c1g - (c1g - c2g) * k;
        cab = c1b - (c1b - c2b) * k;
      } else {
        k = y > y3 ? 1 : y2 === y3 ? 0 : (y2 - y) / (y2 - y3);
        xa = x2 - (x2 - x3) * k;
        car = c2r - (c2r - c3r) * k;
        cag = c2g - (c2g - c3g) * k;
        cab = c2b - (c2b - c3b) * k;
      }
      k = y < y1 ? 0 : y > y3 ? 1 : (y1 - y) / (y1 - y3);
      xb = x1 - (x1 - x3) * k;
      cbr = c1r - (c1r - c3r) * k;
      cbg = c1g - (c1g - c3g) * k;
      cbb = c1b - (c1b - c3b) * k;
      var x1_ = Math.round(Math.min(xa, xb));
      var x2_ = Math.round(Math.max(xa, xb));
      var j = rowSize * y + x1_ * 4;
      for (var x = x1_; x <= x2_; x++) {
        k = (xa - x) / (xa - xb);
        k = k < 0 ? 0 : k > 1 ? 1 : k;
        bytes[j++] = (car - (car - cbr) * k) | 0;
        bytes[j++] = (cag - (cag - cbg) * k) | 0;
        bytes[j++] = (cab - (cab - cbb) * k) | 0;
        bytes[j++] = 255;
      }
    }
  }

  function drawFigure(data, figure, context) {
    var ps = figure.coords;
    var cs = figure.colors;
    var i, ii;
    switch (figure.type) {
      case 'lattice':
        var verticesPerRow = figure.verticesPerRow;
        var rows = Math.floor(ps.length / verticesPerRow) - 1;
        var cols = verticesPerRow - 1;
        for (i = 0; i < rows; i++) {
          var q = i * verticesPerRow;
          for (var j = 0; j < cols; j++, q++) {
            drawTriangle(data, context,
              ps[q], ps[q + 1], ps[q + verticesPerRow],
              cs[q], cs[q + 1], cs[q + verticesPerRow]);
            drawTriangle(data, context,
              ps[q + verticesPerRow + 1], ps[q + 1], ps[q + verticesPerRow],
              cs[q + verticesPerRow + 1], cs[q + 1], cs[q + verticesPerRow]);
          }
        }
        break;
      case 'triangles':
        for (i = 0, ii = ps.length; i < ii; i += 3) {
          drawTriangle(data, context,
            ps[i], ps[i + 1], ps[i + 2],
            cs[i], cs[i + 1], cs[i + 2]);
        }
        break;
      default:
        error('illigal figure');
        break;
    }
  }

  function createMeshCanvas(bounds, combinesScale, coords, colors, figures,
                            backgroundColor, cachedCanvases) {
    // we will increase scale on some weird factor to let antialiasing take
    // care of "rough" edges
    var EXPECTED_SCALE = 1.1;
    // MAX_PATTERN_SIZE is used to avoid OOM situation.
    var MAX_PATTERN_SIZE = 3000; // 10in @ 300dpi shall be enough
    // We need to keep transparent border around our pattern for fill():
    // createPattern with 'no-repeat' will bleed edges across entire area.
    var BORDER_SIZE = 2;

    var offsetX = Math.floor(bounds[0]);
    var offsetY = Math.floor(bounds[1]);
    var boundsWidth = Math.ceil(bounds[2]) - offsetX;
    var boundsHeight = Math.ceil(bounds[3]) - offsetY;

    var width = Math.min(Math.ceil(Math.abs(boundsWidth * combinesScale[0] *
      EXPECTED_SCALE)), MAX_PATTERN_SIZE);
    var height = Math.min(Math.ceil(Math.abs(boundsHeight * combinesScale[1] *
      EXPECTED_SCALE)), MAX_PATTERN_SIZE);
    var scaleX = boundsWidth / width;
    var scaleY = boundsHeight / height;

    var context = {
      coords: coords,
      colors: colors,
      offsetX: -offsetX,
      offsetY: -offsetY,
      scaleX: 1 / scaleX,
      scaleY: 1 / scaleY
    };

    var paddedWidth = width + BORDER_SIZE * 2;
    var paddedHeight = height + BORDER_SIZE * 2;

    var canvas, tmpCanvas, i, ii;
    if (WebGLUtils.isEnabled) {
      canvas = WebGLUtils.drawFigures(width, height, backgroundColor,
                                      figures, context);

      // https://bugzilla.mozilla.org/show_bug.cgi?id=972126
      tmpCanvas = cachedCanvases.getCanvas('mesh', paddedWidth, paddedHeight,
                                           false);
      tmpCanvas.context.drawImage(canvas, BORDER_SIZE, BORDER_SIZE);
      canvas = tmpCanvas.canvas;
    } else {
      tmpCanvas = cachedCanvases.getCanvas('mesh', paddedWidth, paddedHeight,
                                           false);
      var tmpCtx = tmpCanvas.context;

      var data = tmpCtx.createImageData(width, height);
      if (backgroundColor) {
        var bytes = data.data;
        for (i = 0, ii = bytes.length; i < ii; i += 4) {
          bytes[i] = backgroundColor[0];
          bytes[i + 1] = backgroundColor[1];
          bytes[i + 2] = backgroundColor[2];
          bytes[i + 3] = 255;
        }
      }
      for (i = 0; i < figures.length; i++) {
        drawFigure(data, figures[i], context);
      }
      tmpCtx.putImageData(data, BORDER_SIZE, BORDER_SIZE);
      canvas = tmpCanvas.canvas;
    }

    return {canvas: canvas,
            offsetX: offsetX - BORDER_SIZE * scaleX,
            offsetY: offsetY - BORDER_SIZE * scaleY,
            scaleX: scaleX, scaleY: scaleY};
  }
  return createMeshCanvas;
})();

ShadingIRs.Mesh = {
  fromIR: function Mesh_fromIR(raw) {
    //var type = raw[1];
    var coords = raw[2];
    var colors = raw[3];
    var figures = raw[4];
    var bounds = raw[5];
    var matrix = raw[6];
    //var bbox = raw[7];
    var background = raw[8];
    return {
      type: 'Pattern',
      getPattern: function Mesh_getPattern(ctx, owner, shadingFill) {
        var scale;
        if (shadingFill) {
          scale = Util.singularValueDecompose2dScale(ctx.mozCurrentTransform);
        } else {
          // Obtain scale from matrix and current transformation matrix.
          scale = Util.singularValueDecompose2dScale(owner.baseTransform);
          if (matrix) {
            var matrixScale = Util.singularValueDecompose2dScale(matrix);
            scale = [scale[0] * matrixScale[0],
                     scale[1] * matrixScale[1]];
          }
        }


        // Rasterizing on the main thread since sending/queue large canvases
        // might cause OOM.
        var temporaryPatternCanvas = createMeshCanvas(bounds, scale, coords,
          colors, figures, shadingFill ? null : background,
          owner.cachedCanvases);

        if (!shadingFill) {
          ctx.setTransform.apply(ctx, owner.baseTransform);
          if (matrix) {
            ctx.transform.apply(ctx, matrix);
          }
        }

        ctx.translate(temporaryPatternCanvas.offsetX,
                      temporaryPatternCanvas.offsetY);
        ctx.scale(temporaryPatternCanvas.scaleX,
                  temporaryPatternCanvas.scaleY);

        return ctx.createPattern(temporaryPatternCanvas.canvas, 'no-repeat');
      }
    };
  }
};

ShadingIRs.Dummy = {
  fromIR: function Dummy_fromIR() {
    return {
      type: 'Pattern',
      getPattern: function Dummy_fromIR_getPattern() {
        return 'hotpink';
      }
    };
  }
};

function getShadingPatternFromIR(raw) {
  var shadingIR = ShadingIRs[raw[0]];
  if (!shadingIR) {
    error('Unknown IR type: ' + raw[0]);
  }
  return shadingIR.fromIR(raw);
}

var TilingPattern = (function TilingPatternClosure() {
  var PaintType = {
    COLORED: 1,
    UNCOLORED: 2
  };

  var MAX_PATTERN_SIZE = 3000; // 10in @ 300dpi shall be enough

  function TilingPattern(IR, color, ctx, canvasGraphicsFactory, baseTransform) {
    this.operatorList = IR[2];
    this.matrix = IR[3] || [1, 0, 0, 1, 0, 0];
    this.bbox = IR[4];
    this.xstep = IR[5];
    this.ystep = IR[6];
    this.paintType = IR[7];
    this.tilingType = IR[8];
    this.color = color;
    this.canvasGraphicsFactory = canvasGraphicsFactory;
    this.baseTransform = baseTransform;
    this.type = 'Pattern';
    this.ctx = ctx;
  }

  TilingPattern.prototype = {
    createPatternCanvas: function TilinPattern_createPatternCanvas(owner) {
      var operatorList = this.operatorList;
      var bbox = this.bbox;
      var xstep = this.xstep;
      var ystep = this.ystep;
      var paintType = this.paintType;
      var tilingType = this.tilingType;
      var color = this.color;
      var canvasGraphicsFactory = this.canvasGraphicsFactory;

      info('TilingType: ' + tilingType);

      var x0 = bbox[0], y0 = bbox[1], x1 = bbox[2], y1 = bbox[3];

      var topLeft = [x0, y0];
      // we want the canvas to be as large as the step size
      var botRight = [x0 + xstep, y0 + ystep];

      var width = botRight[0] - topLeft[0];
      var height = botRight[1] - topLeft[1];

      // Obtain scale from matrix and current transformation matrix.
      var matrixScale = Util.singularValueDecompose2dScale(this.matrix);
      var curMatrixScale = Util.singularValueDecompose2dScale(
        this.baseTransform);
      var combinedScale = [matrixScale[0] * curMatrixScale[0],
        matrixScale[1] * curMatrixScale[1]];

      // MAX_PATTERN_SIZE is used to avoid OOM situation.
      // Use width and height values that are as close as possible to the end
      // result when the pattern is used. Too low value makes the pattern look
      // blurry. Too large value makes it look too crispy.
      width = Math.min(Math.ceil(Math.abs(width * combinedScale[0])),
        MAX_PATTERN_SIZE);

      height = Math.min(Math.ceil(Math.abs(height * combinedScale[1])),
        MAX_PATTERN_SIZE);

      var tmpCanvas = owner.cachedCanvases.getCanvas('pattern',
        width, height, true);
      var tmpCtx = tmpCanvas.context;
      var graphics = canvasGraphicsFactory.createCanvasGraphics(tmpCtx);
      graphics.groupLevel = owner.groupLevel;

      this.setFillAndStrokeStyleToContext(tmpCtx, paintType, color);

      this.setScale(width, height, xstep, ystep);
      this.transformToScale(graphics);

      // transform coordinates to pattern space
      var tmpTranslate = [1, 0, 0, 1, -topLeft[0], -topLeft[1]];
      graphics.transform.apply(graphics, tmpTranslate);

      this.clipBbox(graphics, bbox, x0, y0, x1, y1);

      graphics.executeOperatorList(operatorList);
      return tmpCanvas.canvas;
    },

    setScale: function TilingPattern_setScale(width, height, xstep, ystep) {
      this.scale = [width / xstep, height / ystep];
    },

    transformToScale: function TilingPattern_transformToScale(graphics) {
      var scale = this.scale;
      var tmpScale = [scale[0], 0, 0, scale[1], 0, 0];
      graphics.transform.apply(graphics, tmpScale);
    },

    scaleToContext: function TilingPattern_scaleToContext() {
      var scale = this.scale;
      this.ctx.scale(1 / scale[0], 1 / scale[1]);
    },

    clipBbox: function clipBbox(graphics, bbox, x0, y0, x1, y1) {
      if (bbox && isArray(bbox) && bbox.length === 4) {
        var bboxWidth = x1 - x0;
        var bboxHeight = y1 - y0;
        graphics.ctx.rect(x0, y0, bboxWidth, bboxHeight);
        graphics.clip();
        graphics.endPath();
      }
    },

    setFillAndStrokeStyleToContext:
      function setFillAndStrokeStyleToContext(context, paintType, color) {
        switch (paintType) {
          case PaintType.COLORED:
            var ctx = this.ctx;
            context.fillStyle = ctx.fillStyle;
            context.strokeStyle = ctx.strokeStyle;
            break;
          case PaintType.UNCOLORED:
            var cssColor = Util.makeCssRgb(color[0], color[1], color[2]);
            context.fillStyle = cssColor;
            context.strokeStyle = cssColor;
            break;
          default:
            error('Unsupported paint type: ' + paintType);
        }
      },

    getPattern: function TilingPattern_getPattern(ctx, owner) {
      var temporaryPatternCanvas = this.createPatternCanvas(owner);

      ctx = this.ctx;
      ctx.setTransform.apply(ctx, this.baseTransform);
      ctx.transform.apply(ctx, this.matrix);
      this.scaleToContext();

      return ctx.createPattern(temporaryPatternCanvas, 'repeat');
    }
  };

  return TilingPattern;
})();

exports.getShadingPatternFromIR = getShadingPatternFromIR;
exports.TilingPattern = TilingPattern;
}));


(function (root, factory) {
  {
    factory((root.pdfjsDisplayCanvas = {}), root.pdfjsSharedUtil,
      root.pdfjsDisplayDOMUtils, root.pdfjsDisplayPatternHelper,
      root.pdfjsDisplayWebGL);
  }
}(this, function (exports, sharedUtil, displayDOMUtils, displayPatternHelper,
                  displayWebGL) {

var FONT_IDENTITY_MATRIX = sharedUtil.FONT_IDENTITY_MATRIX;
var IDENTITY_MATRIX = sharedUtil.IDENTITY_MATRIX;
var ImageKind = sharedUtil.ImageKind;
var OPS = sharedUtil.OPS;
var TextRenderingMode = sharedUtil.TextRenderingMode;
var Uint32ArrayView = sharedUtil.Uint32ArrayView;
var Util = sharedUtil.Util;
var assert = sharedUtil.assert;
var info = sharedUtil.info;
var isNum = sharedUtil.isNum;
var isArray = sharedUtil.isArray;
var isLittleEndian = sharedUtil.isLittleEndian;
var error = sharedUtil.error;
var shadow = sharedUtil.shadow;
var warn = sharedUtil.warn;
var TilingPattern = displayPatternHelper.TilingPattern;
var getShadingPatternFromIR = displayPatternHelper.getShadingPatternFromIR;
var WebGLUtils = displayWebGL.WebGLUtils;
var hasCanvasTypedArrays = displayDOMUtils.hasCanvasTypedArrays;

// <canvas> contexts store most of the state we need natively.
// However, PDF needs a bit more state, which we store here.

// Minimal font size that would be used during canvas fillText operations.
var MIN_FONT_SIZE = 16;
// Maximum font size that would be used during canvas fillText operations.
var MAX_FONT_SIZE = 100;
var MAX_GROUP_SIZE = 4096;

// Heuristic value used when enforcing minimum line widths.
var MIN_WIDTH_FACTOR = 0.65;

var COMPILE_TYPE3_GLYPHS = true;
var MAX_SIZE_TO_COMPILE = 1000;

var FULL_CHUNK_HEIGHT = 16;

var HasCanvasTypedArraysCached = {
  get value() {
    return shadow(HasCanvasTypedArraysCached, 'value', hasCanvasTypedArrays());
  }
};

var IsLittleEndianCached = {
  get value() {
    return shadow(IsLittleEndianCached, 'value', isLittleEndian());
  }
};

function createScratchCanvas(width, height) {
  var canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

function addContextCurrentTransform(ctx) {
  // If the context doesn't expose a `mozCurrentTransform`, add a JS based one.
  if (!ctx.mozCurrentTransform) {
    ctx._originalSave = ctx.save;
    ctx._originalRestore = ctx.restore;
    ctx._originalRotate = ctx.rotate;
    ctx._originalScale = ctx.scale;
    ctx._originalTranslate = ctx.translate;
    ctx._originalTransform = ctx.transform;
    ctx._originalSetTransform = ctx.setTransform;

    ctx._transformMatrix = ctx._transformMatrix || [1, 0, 0, 1, 0, 0];
    ctx._transformStack = [];

    Object.defineProperty(ctx, 'mozCurrentTransform', {
      get: function getCurrentTransform() {
        return this._transformMatrix;
      }
    });

    Object.defineProperty(ctx, 'mozCurrentTransformInverse', {
      get: function getCurrentTransformInverse() {
        // Calculation done using WolframAlpha:
        // http://www.wolframalpha.com/input/?
        //   i=Inverse+{{a%2C+c%2C+e}%2C+{b%2C+d%2C+f}%2C+{0%2C+0%2C+1}}

        var m = this._transformMatrix;
        var a = m[0], b = m[1], c = m[2], d = m[3], e = m[4], f = m[5];

        var ad_bc = a * d - b * c;
        var bc_ad = b * c - a * d;

        return [
          d / ad_bc,
          b / bc_ad,
          c / bc_ad,
          a / ad_bc,
          (d * e - c * f) / bc_ad,
          (b * e - a * f) / ad_bc
        ];
      }
    });

    ctx.save = function ctxSave() {
      var old = this._transformMatrix;
      this._transformStack.push(old);
      this._transformMatrix = old.slice(0, 6);

      this._originalSave();
    };

    ctx.restore = function ctxRestore() {
      var prev = this._transformStack.pop();
      if (prev) {
        this._transformMatrix = prev;
        this._originalRestore();
      }
    };

    ctx.translate = function ctxTranslate(x, y) {
      var m = this._transformMatrix;
      m[4] = m[0] * x + m[2] * y + m[4];
      m[5] = m[1] * x + m[3] * y + m[5];

      this._originalTranslate(x, y);
    };

    ctx.scale = function ctxScale(x, y) {
      var m = this._transformMatrix;
      m[0] = m[0] * x;
      m[1] = m[1] * x;
      m[2] = m[2] * y;
      m[3] = m[3] * y;

      this._originalScale(x, y);
    };

    ctx.transform = function ctxTransform(a, b, c, d, e, f) {
      var m = this._transformMatrix;
      this._transformMatrix = [
        m[0] * a + m[2] * b,
        m[1] * a + m[3] * b,
        m[0] * c + m[2] * d,
        m[1] * c + m[3] * d,
        m[0] * e + m[2] * f + m[4],
        m[1] * e + m[3] * f + m[5]
      ];

      ctx._originalTransform(a, b, c, d, e, f);
    };

    ctx.setTransform = function ctxSetTransform(a, b, c, d, e, f) {
      this._transformMatrix = [a, b, c, d, e, f];

      ctx._originalSetTransform(a, b, c, d, e, f);
    };

    ctx.rotate = function ctxRotate(angle) {
      var cosValue = Math.cos(angle);
      var sinValue = Math.sin(angle);

      var m = this._transformMatrix;
      this._transformMatrix = [
        m[0] * cosValue + m[2] * sinValue,
        m[1] * cosValue + m[3] * sinValue,
        m[0] * (-sinValue) + m[2] * cosValue,
        m[1] * (-sinValue) + m[3] * cosValue,
        m[4],
        m[5]
      ];

      this._originalRotate(angle);
    };
  }
}

var CachedCanvases = (function CachedCanvasesClosure() {
  function CachedCanvases() {
    this.cache = Object.create(null);
  }
  CachedCanvases.prototype = {
    getCanvas: function CachedCanvases_getCanvas(id, width, height,
                                                 trackTransform) {
      var canvasEntry;
      if (this.cache[id] !== undefined) {
        canvasEntry = this.cache[id];
        canvasEntry.canvas.width = width;
        canvasEntry.canvas.height = height;
        // reset canvas transform for emulated mozCurrentTransform, if needed
        canvasEntry.context.setTransform(1, 0, 0, 1, 0, 0);
      } else {
        var canvas = createScratchCanvas(width, height);
        var ctx = canvas.getContext('2d');
        if (trackTransform) {
          addContextCurrentTransform(ctx);
        }
        this.cache[id] = canvasEntry = {canvas: canvas, context: ctx};
      }
      return canvasEntry;
    },
    clear: function () {
      for (var id in this.cache) {
        var canvasEntry = this.cache[id];
        // Zeroing the width and height causes Firefox to release graphics
        // resources immediately, which can greatly reduce memory consumption.
        canvasEntry.canvas.width = 0;
        canvasEntry.canvas.height = 0;
        delete this.cache[id];
      }
    }
  };
  return CachedCanvases;
})();

function compileType3Glyph(imgData) {
  var POINT_TO_PROCESS_LIMIT = 1000;

  var width = imgData.width, height = imgData.height;
  var i, j, j0, width1 = width + 1;
  var points = new Uint8Array(width1 * (height + 1));
  var POINT_TYPES =
      new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]);

  // decodes bit-packed mask data
  var lineSize = (width + 7) & ~7, data0 = imgData.data;
  var data = new Uint8Array(lineSize * height), pos = 0, ii;
  for (i = 0, ii = data0.length; i < ii; i++) {
    var mask = 128, elem = data0[i];
    while (mask > 0) {
      data[pos++] = (elem & mask) ? 0 : 255;
      mask >>= 1;
    }
  }

  // finding iteresting points: every point is located between mask pixels,
  // so there will be points of the (width + 1)x(height + 1) grid. Every point
  // will have flags assigned based on neighboring mask pixels:
  //   4 | 8
  //   --P--
  //   2 | 1
  // We are interested only in points with the flags:
  //   - outside corners: 1, 2, 4, 8;
  //   - inside corners: 7, 11, 13, 14;
  //   - and, intersections: 5, 10.
  var count = 0;
  pos = 0;
  if (data[pos] !== 0) {
    points[0] = 1;
    ++count;
  }
  for (j = 1; j < width; j++) {
    if (data[pos] !== data[pos + 1]) {
      points[j] = data[pos] ? 2 : 1;
      ++count;
    }
    pos++;
  }
  if (data[pos] !== 0) {
    points[j] = 2;
    ++count;
  }
  for (i = 1; i < height; i++) {
    pos = i * lineSize;
    j0 = i * width1;
    if (data[pos - lineSize] !== data[pos]) {
      points[j0] = data[pos] ? 1 : 8;
      ++count;
    }
    // 'sum' is the position of the current pixel configuration in the 'TYPES'
    // array (in order 8-1-2-4, so we can use '>>2' to shift the column).
    var sum = (data[pos] ? 4 : 0) + (data[pos - lineSize] ? 8 : 0);
    for (j = 1; j < width; j++) {
      sum = (sum >> 2) + (data[pos + 1] ? 4 : 0) +
            (data[pos - lineSize + 1] ? 8 : 0);
      if (POINT_TYPES[sum]) {
        points[j0 + j] = POINT_TYPES[sum];
        ++count;
      }
      pos++;
    }
    if (data[pos - lineSize] !== data[pos]) {
      points[j0 + j] = data[pos] ? 2 : 4;
      ++count;
    }

    if (count > POINT_TO_PROCESS_LIMIT) {
      return null;
    }
  }

  pos = lineSize * (height - 1);
  j0 = i * width1;
  if (data[pos] !== 0) {
    points[j0] = 8;
    ++count;
  }
  for (j = 1; j < width; j++) {
    if (data[pos] !== data[pos + 1]) {
      points[j0 + j] = data[pos] ? 4 : 8;
      ++count;
    }
    pos++;
  }
  if (data[pos] !== 0) {
    points[j0 + j] = 4;
    ++count;
  }
  if (count > POINT_TO_PROCESS_LIMIT) {
    return null;
  }

  // building outlines
  var steps = new Int32Array([0, width1, -1, 0, -width1, 0, 0, 0, 1]);
  var outlines = [];
  for (i = 0; count && i <= height; i++) {
    var p = i * width1;
    var end = p + width;
    while (p < end && !points[p]) {
      p++;
    }
    if (p === end) {
      continue;
    }
    var coords = [p % width1, i];

    var type = points[p], p0 = p, pp;
    do {
      var step = steps[type];
      do {
        p += step;
      } while (!points[p]);

      pp = points[p];
      if (pp !== 5 && pp !== 10) {
        // set new direction
        type = pp;
        // delete mark
        points[p] = 0;
      } else { // type is 5 or 10, ie, a crossing
        // set new direction
        type = pp & ((0x33 * type) >> 4);
        // set new type for "future hit"
        points[p] &= (type >> 2 | type << 2);
      }

      coords.push(p % width1);
      coords.push((p / width1) | 0);
      --count;
    } while (p0 !== p);
    outlines.push(coords);
    --i;
  }

  var drawOutline = function(c) {
    c.save();
    // the path shall be painted in [0..1]x[0..1] space
    c.scale(1 / width, -1 / height);
    c.translate(0, -height);
    c.beginPath();
    for (var i = 0, ii = outlines.length; i < ii; i++) {
      var o = outlines[i];
      c.moveTo(o[0], o[1]);
      for (var j = 2, jj = o.length; j < jj; j += 2) {
        c.lineTo(o[j], o[j+1]);
      }
    }
    c.fill();
    c.beginPath();
    c.restore();
  };

  return drawOutline;
}

var CanvasExtraState = (function CanvasExtraStateClosure() {
  function CanvasExtraState(old) {
    // Are soft masks and alpha values shapes or opacities?
    this.alphaIsShape = false;
    this.fontSize = 0;
    this.fontSizeScale = 1;
    this.textMatrix = IDENTITY_MATRIX;
    this.textMatrixScale = 1;
    this.fontMatrix = FONT_IDENTITY_MATRIX;
    this.leading = 0;
    // Current point (in user coordinates)
    this.x = 0;
    this.y = 0;
    // Start of text line (in text coordinates)
    this.lineX = 0;
    this.lineY = 0;
    // Character and word spacing
    this.charSpacing = 0;
    this.wordSpacing = 0;
    this.textHScale = 1;
    this.textRenderingMode = TextRenderingMode.FILL;
    this.textRise = 0;
    // Default fore and background colors
    this.fillColor = '#000000';
    this.strokeColor = '#000000';
    this.patternFill = false;
    // Note: fill alpha applies to all non-stroking operations
    this.fillAlpha = 1;
    this.strokeAlpha = 1;
    this.lineWidth = 1;
    this.activeSMask = null;
    this.resumeSMaskCtx = null; // nonclonable field (see the save method below)

    this.old = old;
  }

  CanvasExtraState.prototype = {
    clone: function CanvasExtraState_clone() {
      return Object.create(this);
    },
    setCurrentPoint: function CanvasExtraState_setCurrentPoint(x, y) {
      this.x = x;
      this.y = y;
    }
  };
  return CanvasExtraState;
})();

var CanvasGraphics = (function CanvasGraphicsClosure() {
  // Defines the time the executeOperatorList is going to be executing
  // before it stops and shedules a continue of execution.
  var EXECUTION_TIME = 15;
  // Defines the number of steps before checking the execution time
  var EXECUTION_STEPS = 10;

  function CanvasGraphics(canvasCtx, commonObjs, objs, imageLayer) {
    this.ctx = canvasCtx;
    this.current = new CanvasExtraState();
    this.stateStack = [];
    this.pendingClip = null;
    this.pendingEOFill = false;
    this.res = null;
    this.xobjs = null;
    this.commonObjs = commonObjs;
    this.objs = objs;
    this.imageLayer = imageLayer;
    this.groupStack = [];
    this.processingType3 = null;
    // Patterns are painted relative to the initial page/form transform, see pdf
    // spec 8.7.2 NOTE 1.
    this.baseTransform = null;
    this.baseTransformStack = [];
    this.groupLevel = 0;
    this.smaskStack = [];
    this.smaskCounter = 0;
    this.tempSMask = null;
    this.cachedCanvases = new CachedCanvases();
    if (canvasCtx) {
      // NOTE: if mozCurrentTransform is polyfilled, then the current state of
      // the transformation must already be set in canvasCtx._transformMatrix.
      addContextCurrentTransform(canvasCtx);
    }
    this.cachedGetSinglePixelWidth = null;
  }

  function putBinaryImageData(ctx, imgData) {
    if (typeof ImageData !== 'undefined' && imgData instanceof ImageData) {
      ctx.putImageData(imgData, 0, 0);
      return;
    }

    // Put the image data to the canvas in chunks, rather than putting the
    // whole image at once.  This saves JS memory, because the ImageData object
    // is smaller. It also possibly saves C++ memory within the implementation
    // of putImageData(). (E.g. in Firefox we make two short-lived copies of
    // the data passed to putImageData()). |n| shouldn't be too small, however,
    // because too many putImageData() calls will slow things down.
    //
    // Note: as written, if the last chunk is partial, the putImageData() call
    // will (conceptually) put pixels past the bounds of the canvas.  But
    // that's ok; any such pixels are ignored.

    var height = imgData.height, width = imgData.width;
    var partialChunkHeight = height % FULL_CHUNK_HEIGHT;
    var fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
    var totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;

    var chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
    var srcPos = 0, destPos;
    var src = imgData.data;
    var dest = chunkImgData.data;
    var i, j, thisChunkHeight, elemsInThisChunk;

    // There are multiple forms in which the pixel data can be passed, and
    // imgData.kind tells us which one this is.
    if (imgData.kind === ImageKind.GRAYSCALE_1BPP) {
      // Grayscale, 1 bit per pixel (i.e. black-and-white).
      var srcLength = src.byteLength;
      var dest32 = HasCanvasTypedArraysCached.value ?
        new Uint32Array(dest.buffer) : new Uint32ArrayView(dest);
      var dest32DataLength = dest32.length;
      var fullSrcDiff = (width + 7) >> 3;
      var white = 0xFFFFFFFF;
      var black = (IsLittleEndianCached.value ||
                   !HasCanvasTypedArraysCached.value) ? 0xFF000000 : 0x000000FF;
      for (i = 0; i < totalChunks; i++) {
        thisChunkHeight =
          (i < fullChunks) ? FULL_CHUNK_HEIGHT : partialChunkHeight;
        destPos = 0;
        for (j = 0; j < thisChunkHeight; j++) {
          var srcDiff = srcLength - srcPos;
          var k = 0;
          var kEnd = (srcDiff > fullSrcDiff) ? width : srcDiff * 8 - 7;
          var kEndUnrolled = kEnd & ~7;
          var mask = 0;
          var srcByte = 0;
          for (; k < kEndUnrolled; k += 8) {
            srcByte = src[srcPos++];
            dest32[destPos++] = (srcByte & 128) ? white : black;
            dest32[destPos++] = (srcByte & 64) ? white : black;
            dest32[destPos++] = (srcByte & 32) ? white : black;
            dest32[destPos++] = (srcByte & 16) ? white : black;
            dest32[destPos++] = (srcByte & 8) ? white : black;
            dest32[destPos++] = (srcByte & 4) ? white : black;
            dest32[destPos++] = (srcByte & 2) ? white : black;
            dest32[destPos++] = (srcByte & 1) ? white : black;
          }
          for (; k < kEnd; k++) {
             if (mask === 0) {
               srcByte = src[srcPos++];
               mask = 128;
             }

            dest32[destPos++] = (srcByte & mask) ? white : black;
            mask >>= 1;
          }
        }
        // We ran out of input. Make all remaining pixels transparent.
        while (destPos < dest32DataLength) {
          dest32[destPos++] = 0;
        }

        ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
      }
    } else if (imgData.kind === ImageKind.RGBA_32BPP) {
      // RGBA, 32-bits per pixel.

      j = 0;
      elemsInThisChunk = width * FULL_CHUNK_HEIGHT * 4;
      for (i = 0; i < fullChunks; i++) {
        dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
        srcPos += elemsInThisChunk;

        ctx.putImageData(chunkImgData, 0, j);
        j += FULL_CHUNK_HEIGHT;
      }
      if (i < totalChunks) {
        elemsInThisChunk = width * partialChunkHeight * 4;
        dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
        ctx.putImageData(chunkImgData, 0, j);
      }

    } else if (imgData.kind === ImageKind.RGB_24BPP) {
      // RGB, 24-bits per pixel.
      thisChunkHeight = FULL_CHUNK_HEIGHT;
      elemsInThisChunk = width * thisChunkHeight;
      for (i = 0; i < totalChunks; i++) {
        if (i >= fullChunks) {
          thisChunkHeight = partialChunkHeight;
          elemsInThisChunk = width * thisChunkHeight;
        }

        destPos = 0;
        for (j = elemsInThisChunk; j--;) {
          dest[destPos++] = src[srcPos++];
          dest[destPos++] = src[srcPos++];
          dest[destPos++] = src[srcPos++];
          dest[destPos++] = 255;
        }
        ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
      }
    } else {
      error('bad image kind: ' + imgData.kind);
    }
  }

  function putBinaryImageMask(ctx, imgData) {
    var height = imgData.height, width = imgData.width;
    var partialChunkHeight = height % FULL_CHUNK_HEIGHT;
    var fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
    var totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;

    var chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
    var srcPos = 0;
    var src = imgData.data;
    var dest = chunkImgData.data;

    for (var i = 0; i < totalChunks; i++) {
      var thisChunkHeight =
        (i < fullChunks) ? FULL_CHUNK_HEIGHT : partialChunkHeight;

      // Expand the mask so it can be used by the canvas.  Any required
      // inversion has already been handled.
      var destPos = 3; // alpha component offset
      for (var j = 0; j < thisChunkHeight; j++) {
        var mask = 0;
        for (var k = 0; k < width; k++) {
          if (!mask) {
            var elem = src[srcPos++];
            mask = 128;
          }
          dest[destPos] = (elem & mask) ? 0 : 255;
          destPos += 4;
          mask >>= 1;
        }
      }
      ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
    }
  }

  function copyCtxState(sourceCtx, destCtx) {
    var properties = ['strokeStyle', 'fillStyle', 'fillRule', 'globalAlpha',
                      'lineWidth', 'lineCap', 'lineJoin', 'miterLimit',
                      'globalCompositeOperation', 'font'];
    for (var i = 0, ii = properties.length; i < ii; i++) {
      var property = properties[i];
      if (sourceCtx[property] !== undefined) {
        destCtx[property] = sourceCtx[property];
      }
    }
    if (sourceCtx.setLineDash !== undefined) {
      destCtx.setLineDash(sourceCtx.getLineDash());
      destCtx.lineDashOffset =  sourceCtx.lineDashOffset;
    } else if (sourceCtx.mozDashOffset !== undefined) {
      destCtx.mozDash = sourceCtx.mozDash;
      destCtx.mozDashOffset = sourceCtx.mozDashOffset;
    }
  }

  function composeSMaskBackdrop(bytes, r0, g0, b0) {
    var length = bytes.length;
    for (var i = 3; i < length; i += 4) {
      var alpha = bytes[i];
      if (alpha === 0) {
        bytes[i - 3] = r0;
        bytes[i - 2] = g0;
        bytes[i - 1] = b0;
      } else if (alpha < 255) {
        var alpha_ = 255 - alpha;
        bytes[i - 3] = (bytes[i - 3] * alpha + r0 * alpha_) >> 8;
        bytes[i - 2] = (bytes[i - 2] * alpha + g0 * alpha_) >> 8;
        bytes[i - 1] = (bytes[i - 1] * alpha + b0 * alpha_) >> 8;
      }
    }
  }

  function composeSMaskAlpha(maskData, layerData, transferMap) {
    var length = maskData.length;
    var scale = 1 / 255;
    for (var i = 3; i < length; i += 4) {
      var alpha = transferMap ? transferMap[maskData[i]] : maskData[i];
      layerData[i] = (layerData[i] * alpha * scale) | 0;
    }
  }

  function composeSMaskLuminosity(maskData, layerData, transferMap) {
    var length = maskData.length;
    for (var i = 3; i < length; i += 4) {
      var y = (maskData[i - 3] * 77) +  // * 0.3 / 255 * 0x10000
              (maskData[i - 2] * 152) + // * 0.59 ....
              (maskData[i - 1] * 28);   // * 0.11 ....
      layerData[i] = transferMap ?
        (layerData[i] * transferMap[y >> 8]) >> 8 :
        (layerData[i] * y) >> 16;
    }
  }

  function genericComposeSMask(maskCtx, layerCtx, width, height,
                               subtype, backdrop, transferMap) {
    var hasBackdrop = !!backdrop;
    var r0 = hasBackdrop ? backdrop[0] : 0;
    var g0 = hasBackdrop ? backdrop[1] : 0;
    var b0 = hasBackdrop ? backdrop[2] : 0;

    var composeFn;
    if (subtype === 'Luminosity') {
      composeFn = composeSMaskLuminosity;
    } else {
      composeFn = composeSMaskAlpha;
    }

    // processing image in chunks to save memory
    var PIXELS_TO_PROCESS = 1048576;
    var chunkSize = Math.min(height, Math.ceil(PIXELS_TO_PROCESS / width));
    for (var row = 0; row < height; row += chunkSize) {
      var chunkHeight = Math.min(chunkSize, height - row);
      var maskData = maskCtx.getImageData(0, row, width, chunkHeight);
      var layerData = layerCtx.getImageData(0, row, width, chunkHeight);

      if (hasBackdrop) {
        composeSMaskBackdrop(maskData.data, r0, g0, b0);
      }
      composeFn(maskData.data, layerData.data, transferMap);

      maskCtx.putImageData(layerData, 0, row);
    }
  }

  function composeSMask(ctx, smask, layerCtx) {
    var mask = smask.canvas;
    var maskCtx = smask.context;

    ctx.setTransform(smask.scaleX, 0, 0, smask.scaleY,
                     smask.offsetX, smask.offsetY);

    var backdrop = smask.backdrop || null;
    if (!smask.transferMap && WebGLUtils.isEnabled) {
      var composed = WebGLUtils.composeSMask(layerCtx.canvas, mask,
        {subtype: smask.subtype, backdrop: backdrop});
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.drawImage(composed, smask.offsetX, smask.offsetY);
      return;
    }
    genericComposeSMask(maskCtx, layerCtx, mask.width, mask.height,
                        smask.subtype, backdrop, smask.transferMap);
    ctx.drawImage(mask, 0, 0);
  }

  var LINE_CAP_STYLES = ['butt', 'round', 'square'];
  var LINE_JOIN_STYLES = ['miter', 'round', 'bevel'];
  var NORMAL_CLIP = {};
  var EO_CLIP = {};

  CanvasGraphics.prototype = {

    beginDrawing: function CanvasGraphics_beginDrawing(transform, viewport,
                                                       transparency) {
      // For pdfs that use blend modes we have to clear the canvas else certain
      // blend modes can look wrong since we'd be blending with a white
      // backdrop. The problem with a transparent backdrop though is we then
      // don't get sub pixel anti aliasing on text, creating temporary
      // transparent canvas when we have blend modes.
      var width = this.ctx.canvas.width;
      var height = this.ctx.canvas.height;

      this.ctx.save();
      this.ctx.fillStyle = 'rgb(255, 255, 255)';
      this.ctx.fillRect(0, 0, width, height);
      this.ctx.restore();

      if (transparency) {
        var transparentCanvas = this.cachedCanvases.getCanvas(
          'transparent', width, height, true);
        this.compositeCtx = this.ctx;
        this.transparentCanvas = transparentCanvas.canvas;
        this.ctx = transparentCanvas.context;
        this.ctx.save();
        // The transform can be applied before rendering, transferring it to
        // the new canvas.
        this.ctx.transform.apply(this.ctx,
                                 this.compositeCtx.mozCurrentTransform);
      }

      this.ctx.save();
      if (transform) {
        this.ctx.transform.apply(this.ctx, transform);
      }
      this.ctx.transform.apply(this.ctx, viewport.transform);

      this.baseTransform = this.ctx.mozCurrentTransform.slice();

      if (this.imageLayer) {
        this.imageLayer.beginLayout();
      }
    },

    executeOperatorList: function CanvasGraphics_executeOperatorList(
                                    operatorList,
                                    executionStartIdx, continueCallback,
                                    stepper) {
      var argsArray = operatorList.argsArray;
      var fnArray = operatorList.fnArray;
      var i = executionStartIdx || 0;
      var argsArrayLen = argsArray.length;

      // Sometimes the OperatorList to execute is empty.
      if (argsArrayLen === i) {
        return i;
      }

      var chunkOperations = (argsArrayLen - i > EXECUTION_STEPS &&
                             typeof continueCallback === 'function');
      var endTime = chunkOperations ? Date.now() + EXECUTION_TIME : 0;
      var steps = 0;

      var commonObjs = this.commonObjs;
      var objs = this.objs;
      var fnId;

      while (true) {
        if (stepper !== undefined && i === stepper.nextBreakPoint) {
          stepper.breakIt(i, continueCallback);
          return i;
        }

        fnId = fnArray[i];

        if (fnId !== OPS.dependency) {
          this[fnId].apply(this, argsArray[i]);
        } else {
          var deps = argsArray[i];
          for (var n = 0, nn = deps.length; n < nn; n++) {
            var depObjId = deps[n];
            var common = depObjId[0] === 'g' && depObjId[1] === '_';
            var objsPool = common ? commonObjs : objs;

            // If the promise isn't resolved yet, add the continueCallback
            // to the promise and bail out.
            if (!objsPool.isResolved(depObjId)) {
              objsPool.get(depObjId, continueCallback);
              return i;
            }
          }
        }

        i++;

        // If the entire operatorList was executed, stop as were done.
        if (i === argsArrayLen) {
          return i;
        }

        // If the execution took longer then a certain amount of time and
        // `continueCallback` is specified, interrupt the execution.
        if (chunkOperations && ++steps > EXECUTION_STEPS) {
          if (Date.now() > endTime) {
            continueCallback();
            return i;
          }
          steps = 0;
        }

        // If the operatorList isn't executed completely yet OR the execution
        // time was short enough, do another execution round.
      }
    },

    endDrawing: function CanvasGraphics_endDrawing() {
      // Finishing all opened operations such as SMask group painting.
      if (this.current.activeSMask !== null) {
        this.endSMaskGroup();
      }

      this.ctx.restore();

      if (this.transparentCanvas) {
        this.ctx = this.compositeCtx;
        this.ctx.save();
        this.ctx.setTransform(1, 0, 0, 1, 0, 0); // Avoid apply transform twice
        this.ctx.drawImage(this.transparentCanvas, 0, 0);
        this.ctx.restore();
        this.transparentCanvas = null;
      }

      this.cachedCanvases.clear();
      WebGLUtils.clear();

      if (this.imageLayer) {
        this.imageLayer.endLayout();
      }
    },

    // Graphics state
    setLineWidth: function CanvasGraphics_setLineWidth(width) {
      this.current.lineWidth = width;
      this.ctx.lineWidth = width;
    },
    setLineCap: function CanvasGraphics_setLineCap(style) {
      this.ctx.lineCap = LINE_CAP_STYLES[style];
    },
    setLineJoin: function CanvasGraphics_setLineJoin(style) {
      this.ctx.lineJoin = LINE_JOIN_STYLES[style];
    },
    setMiterLimit: function CanvasGraphics_setMiterLimit(limit) {
      this.ctx.miterLimit = limit;
    },
    setDash: function CanvasGraphics_setDash(dashArray, dashPhase) {
      var ctx = this.ctx;
      if (ctx.setLineDash !== undefined) {
        ctx.setLineDash(dashArray);
        ctx.lineDashOffset = dashPhase;
      } else {
        ctx.mozDash = dashArray;
        ctx.mozDashOffset = dashPhase;
      }
    },
    setRenderingIntent: function CanvasGraphics_setRenderingIntent(intent) {
      // Maybe if we one day fully support color spaces this will be important
      // for now we can ignore.
      // TODO set rendering intent?
    },
    setFlatness: function CanvasGraphics_setFlatness(flatness) {
      // There's no way to control this with canvas, but we can safely ignore.
      // TODO set flatness?
    },
    setGState: function CanvasGraphics_setGState(states) {
      for (var i = 0, ii = states.length; i < ii; i++) {
        var state = states[i];
        var key = state[0];
        var value = state[1];

        switch (key) {
          case 'LW':
            this.setLineWidth(value);
            break;
          case 'LC':
            this.setLineCap(value);
            break;
          case 'LJ':
            this.setLineJoin(value);
            break;
          case 'ML':
            this.setMiterLimit(value);
            break;
          case 'D':
            this.setDash(value[0], value[1]);
            break;
          case 'RI':
            this.setRenderingIntent(value);
            break;
          case 'FL':
            this.setFlatness(value);
            break;
          case 'Font':
            this.setFont(value[0], value[1]);
            break;
          case 'CA':
            this.current.strokeAlpha = state[1];
            break;
          case 'ca':
            this.current.fillAlpha = state[1];
            this.ctx.globalAlpha = state[1];
            break;
          case 'BM':
            if (value && value.name && (value.name !== 'Normal')) {
              var mode = value.name.replace(/([A-Z])/g,
                function(c) {
                  return '-' + c.toLowerCase();
                }
              ).substring(1);
              this.ctx.globalCompositeOperation = mode;
              if (this.ctx.globalCompositeOperation !== mode) {
                warn('globalCompositeOperation "' + mode +
                     '" is not supported');
              }
            } else {
              this.ctx.globalCompositeOperation = 'source-over';
            }
            break;
          case 'SMask':
            if (this.current.activeSMask) {
              // If SMask is currrenly used, it needs to be suspended or
              // finished. Suspend only makes sense when at least one save()
              // was performed and state needs to be reverted on restore().
              if (this.stateStack.length > 0 &&
                  (this.stateStack[this.stateStack.length - 1].activeSMask ===
                   this.current.activeSMask)) {
                this.suspendSMaskGroup();
              } else {
                this.endSMaskGroup();
              }
            }
            this.current.activeSMask = value ? this.tempSMask : null;
            if (this.current.activeSMask) {
              this.beginSMaskGroup();
            }
            this.tempSMask = null;
            break;
        }
      }
    },
    beginSMaskGroup: function CanvasGraphics_beginSMaskGroup() {

      var activeSMask = this.current.activeSMask;
      var drawnWidth = activeSMask.canvas.width;
      var drawnHeight = activeSMask.canvas.height;
      var cacheId = 'smaskGroupAt' + this.groupLevel;
      var scratchCanvas = this.cachedCanvases.getCanvas(
        cacheId, drawnWidth, drawnHeight, true);

      var currentCtx = this.ctx;
      var currentTransform = currentCtx.mozCurrentTransform;
      this.ctx.save();

      var groupCtx = scratchCanvas.context;
      groupCtx.scale(1 / activeSMask.scaleX, 1 / activeSMask.scaleY);
      groupCtx.translate(-activeSMask.offsetX, -activeSMask.offsetY);
      groupCtx.transform.apply(groupCtx, currentTransform);

      activeSMask.startTransformInverse = groupCtx.mozCurrentTransformInverse;

      copyCtxState(currentCtx, groupCtx);
      this.ctx = groupCtx;
      this.setGState([
        ['BM', 'Normal'],
        ['ca', 1],
        ['CA', 1]
      ]);
      this.groupStack.push(currentCtx);
      this.groupLevel++;
    },
    suspendSMaskGroup: function CanvasGraphics_endSMaskGroup() {
      // Similar to endSMaskGroup, the intermediate canvas has to be composed
      // and future ctx state restored.
      var groupCtx = this.ctx;
      this.groupLevel--;
      this.ctx = this.groupStack.pop();

      composeSMask(this.ctx, this.current.activeSMask, groupCtx);
      this.ctx.restore();
      this.ctx.save(); // save is needed since SMask will be resumed.
      copyCtxState(groupCtx, this.ctx);

      // Saving state for resuming.
      this.current.resumeSMaskCtx = groupCtx;
      // Transform was changed in the SMask canvas, reflecting this change on
      // this.ctx.
      var deltaTransform = Util.transform(
        this.current.activeSMask.startTransformInverse,
        groupCtx.mozCurrentTransform);
      this.ctx.transform.apply(this.ctx, deltaTransform);

      // SMask was composed, the results at the groupCtx can be cleared.
      groupCtx.save();
      groupCtx.setTransform(1, 0, 0, 1, 0, 0);
      groupCtx.clearRect(0, 0, groupCtx.canvas.width, groupCtx.canvas.height);
      groupCtx.restore();
    },
    resumeSMaskGroup: function CanvasGraphics_endSMaskGroup() {
      // Resuming state saved by suspendSMaskGroup. We don't need to restore
      // any groupCtx state since restore() command (the only caller) will do
      // that for us. See also beginSMaskGroup.
      var groupCtx = this.current.resumeSMaskCtx;
      var currentCtx = this.ctx;
      this.ctx = groupCtx;
      this.groupStack.push(currentCtx);
      this.groupLevel++;
    },
    endSMaskGroup: function CanvasGraphics_endSMaskGroup() {
      var groupCtx = this.ctx;
      this.groupLevel--;
      this.ctx = this.groupStack.pop();

      composeSMask(this.ctx, this.current.activeSMask, groupCtx);
      this.ctx.restore();
      copyCtxState(groupCtx, this.ctx);
      // Transform was changed in the SMask canvas, reflecting this change on
      // this.ctx.
      var deltaTransform = Util.transform(
        this.current.activeSMask.startTransformInverse,
        groupCtx.mozCurrentTransform);
      this.ctx.transform.apply(this.ctx, deltaTransform);
    },
    save: function CanvasGraphics_save() {
      this.ctx.save();
      var old = this.current;
      this.stateStack.push(old);
      this.current = old.clone();
      this.current.resumeSMaskCtx = null;
    },
    restore: function CanvasGraphics_restore() {
      // SMask was suspended, we just need to resume it.
      if (this.current.resumeSMaskCtx) {
        this.resumeSMaskGroup();
      }
      // SMask has to be finished once there is no states that are using the
      // same SMask.
      if (this.current.activeSMask !== null && (this.stateStack.length === 0 ||
          this.stateStack[this.stateStack.length - 1].activeSMask !==
          this.current.activeSMask)) {
        this.endSMaskGroup();
      }

      if (this.stateStack.length !== 0) {
        this.current = this.stateStack.pop();
        this.ctx.restore();

        // Ensure that the clipping path is reset (fixes issue6413.pdf).
        this.pendingClip = null;

        this.cachedGetSinglePixelWidth = null;
      }
    },
    transform: function CanvasGraphics_transform(a, b, c, d, e, f) {
      this.ctx.transform(a, b, c, d, e, f);

      this.cachedGetSinglePixelWidth = null;
    },

    // Path
    constructPath: function CanvasGraphics_constructPath(ops, args) {
      var ctx = this.ctx;
      var current = this.current;
      var x = current.x, y = current.y;
      for (var i = 0, j = 0, ii = ops.length; i < ii; i++) {
        switch (ops[i] | 0) {
          case OPS.rectangle:
            x = args[j++];
            y = args[j++];
            var width = args[j++];
            var height = args[j++];
            if (width === 0) {
              width = this.getSinglePixelWidth();
            }
            if (height === 0) {
              height = this.getSinglePixelWidth();
            }
            var xw = x + width;
            var yh = y + height;
            this.ctx.moveTo(x, y);
            this.ctx.lineTo(xw, y);
            this.ctx.lineTo(xw, yh);
            this.ctx.lineTo(x, yh);
            this.ctx.lineTo(x, y);
            this.ctx.closePath();
            break;
          case OPS.moveTo:
            x = args[j++];
            y = args[j++];
            ctx.moveTo(x, y);
            break;
          case OPS.lineTo:
            x = args[j++];
            y = args[j++];
            ctx.lineTo(x, y);
            break;
          case OPS.curveTo:
            x = args[j + 4];
            y = args[j + 5];
            ctx.bezierCurveTo(args[j], args[j + 1], args[j + 2], args[j + 3],
                              x, y);
            j += 6;
            break;
          case OPS.curveTo2:
            ctx.bezierCurveTo(x, y, args[j], args[j + 1],
                              args[j + 2], args[j + 3]);
            x = args[j + 2];
            y = args[j + 3];
            j += 4;
            break;
          case OPS.curveTo3:
            x = args[j + 2];
            y = args[j + 3];
            ctx.bezierCurveTo(args[j], args[j + 1], x, y, x, y);
            j += 4;
            break;
          case OPS.closePath:
            ctx.closePath();
            break;
        }
      }
      current.setCurrentPoint(x, y);
    },
    closePath: function CanvasGraphics_closePath() {
      this.ctx.closePath();
    },
    stroke: function CanvasGraphics_stroke(consumePath) {
      consumePath = typeof consumePath !== 'undefined' ? consumePath : true;
      var ctx = this.ctx;
      var strokeColor = this.current.strokeColor;
      // Prevent drawing too thin lines by enforcing a minimum line width.
      ctx.lineWidth = Math.max(this.getSinglePixelWidth() * MIN_WIDTH_FACTOR,
                               this.current.lineWidth);
      // For stroke we want to temporarily change the global alpha to the
      // stroking alpha.
      ctx.globalAlpha = this.current.strokeAlpha;
      if (strokeColor && strokeColor.hasOwnProperty('type') &&
          strokeColor.type === 'Pattern') {
        // for patterns, we transform to pattern space, calculate
        // the pattern, call stroke, and restore to user space
        ctx.save();
        ctx.strokeStyle = strokeColor.getPattern(ctx, this);
        ctx.stroke();
        ctx.restore();
      } else {
        ctx.stroke();
      }
      if (consumePath) {
        this.consumePath();
      }
      // Restore the global alpha to the fill alpha
      ctx.globalAlpha = this.current.fillAlpha;
    },
    closeStroke: function CanvasGraphics_closeStroke() {
      this.closePath();
      this.stroke();
    },
    fill: function CanvasGraphics_fill(consumePath) {
      consumePath = typeof consumePath !== 'undefined' ? consumePath : true;
      var ctx = this.ctx;
      var fillColor = this.current.fillColor;
      var isPatternFill = this.current.patternFill;
      var needRestore = false;

      if (isPatternFill) {
        ctx.save();
        if (this.baseTransform) {
          ctx.setTransform.apply(ctx, this.baseTransform);
        }
        ctx.fillStyle = fillColor.getPattern(ctx, this);
        needRestore = true;
      }

      if (this.pendingEOFill) {
        if (ctx.mozFillRule !== undefined) {
          ctx.mozFillRule = 'evenodd';
          ctx.fill();
          ctx.mozFillRule = 'nonzero';
        } else {
          ctx.fill('evenodd');
        }
        this.pendingEOFill = false;
      } else {
        ctx.fill();
      }

      if (needRestore) {
        ctx.restore();
      }
      if (consumePath) {
        this.consumePath();
      }
    },
    eoFill: function CanvasGraphics_eoFill() {
      this.pendingEOFill = true;
      this.fill();
    },
    fillStroke: function CanvasGraphics_fillStroke() {
      this.fill(false);
      this.stroke(false);

      this.consumePath();
    },
    eoFillStroke: function CanvasGraphics_eoFillStroke() {
      this.pendingEOFill = true;
      this.fillStroke();
    },
    closeFillStroke: function CanvasGraphics_closeFillStroke() {
      this.closePath();
      this.fillStroke();
    },
    closeEOFillStroke: function CanvasGraphics_closeEOFillStroke() {
      this.pendingEOFill = true;
      this.closePath();
      this.fillStroke();
    },
    endPath: function CanvasGraphics_endPath() {
      this.consumePath();
    },

    // Clipping
    clip: function CanvasGraphics_clip() {
      this.pendingClip = NORMAL_CLIP;
    },
    eoClip: function CanvasGraphics_eoClip() {
      this.pendingClip = EO_CLIP;
    },

    // Text
    beginText: function CanvasGraphics_beginText() {
      this.current.textMatrix = IDENTITY_MATRIX;
      this.current.textMatrixScale = 1;
      this.current.x = this.current.lineX = 0;
      this.current.y = this.current.lineY = 0;
    },
    endText: function CanvasGraphics_endText() {
      var paths = this.pendingTextPaths;
      var ctx = this.ctx;
      if (paths === undefined) {
        ctx.beginPath();
        return;
      }

      ctx.save();
      ctx.beginPath();
      for (var i = 0; i < paths.length; i++) {
        var path = paths[i];
        ctx.setTransform.apply(ctx, path.transform);
        ctx.translate(path.x, path.y);
        path.addToPath(ctx, path.fontSize);
      }
      ctx.restore();
      ctx.clip();
      ctx.beginPath();
      delete this.pendingTextPaths;
    },
    setCharSpacing: function CanvasGraphics_setCharSpacing(spacing) {
      this.current.charSpacing = spacing;
    },
    setWordSpacing: function CanvasGraphics_setWordSpacing(spacing) {
      this.current.wordSpacing = spacing;
    },
    setHScale: function CanvasGraphics_setHScale(scale) {
      this.current.textHScale = scale / 100;
    },
    setLeading: function CanvasGraphics_setLeading(leading) {
      this.current.leading = -leading;
    },
    setFont: function CanvasGraphics_setFont(fontRefName, size) {
      var fontObj = this.commonObjs.get(fontRefName);
      var current = this.current;

      if (!fontObj) {
        error('Can\'t find font for ' + fontRefName);
      }

      current.fontMatrix = (fontObj.fontMatrix ?
                            fontObj.fontMatrix : FONT_IDENTITY_MATRIX);

      // A valid matrix needs all main diagonal elements to be non-zero
      // This also ensures we bypass FF bugzilla bug #719844.
      if (current.fontMatrix[0] === 0 ||
          current.fontMatrix[3] === 0) {
        warn('Invalid font matrix for font ' + fontRefName);
      }

      // The spec for Tf (setFont) says that 'size' specifies the font 'scale',
      // and in some docs this can be negative (inverted x-y axes).
      if (size < 0) {
        size = -size;
        current.fontDirection = -1;
      } else {
        current.fontDirection = 1;
      }

      this.current.font = fontObj;
      this.current.fontSize = size;

      if (fontObj.isType3Font) {
        return; // we don't need ctx.font for Type3 fonts
      }

      var name = fontObj.loadedName || 'sans-serif';
      var bold = fontObj.black ? (fontObj.bold ? '900' : 'bold') :
                                 (fontObj.bold ? 'bold' : 'normal');

      var italic = fontObj.italic ? 'italic' : 'normal';
      var typeface = '"' + name + '", ' + fontObj.fallbackName;

      // Some font backends cannot handle fonts below certain size.
      // Keeping the font at minimal size and using the fontSizeScale to change
      // the current transformation matrix before the fillText/strokeText.
      // See https://bugzilla.mozilla.org/show_bug.cgi?id=726227
      var browserFontSize = size < MIN_FONT_SIZE ? MIN_FONT_SIZE :
                            size > MAX_FONT_SIZE ? MAX_FONT_SIZE : size;
      this.current.fontSizeScale = size / browserFontSize;

      var rule = italic + ' ' + bold + ' ' + browserFontSize + 'px ' + typeface;
      this.ctx.font = rule;
    },
    setTextRenderingMode: function CanvasGraphics_setTextRenderingMode(mode) {
      this.current.textRenderingMode = mode;
    },
    setTextRise: function CanvasGraphics_setTextRise(rise) {
      this.current.textRise = rise;
    },
    moveText: function CanvasGraphics_moveText(x, y) {
      this.current.x = this.current.lineX += x;
      this.current.y = this.current.lineY += y;
    },
    setLeadingMoveText: function CanvasGraphics_setLeadingMoveText(x, y) {
      this.setLeading(-y);
      this.moveText(x, y);
    },
    setTextMatrix: function CanvasGraphics_setTextMatrix(a, b, c, d, e, f) {
      this.current.textMatrix = [a, b, c, d, e, f];
      this.current.textMatrixScale = Math.sqrt(a * a + b * b);

      this.current.x = this.current.lineX = 0;
      this.current.y = this.current.lineY = 0;
    },
    nextLine: function CanvasGraphics_nextLine() {
      this.moveText(0, this.current.leading);
    },

    paintChar: function CanvasGraphics_paintChar(character, x, y) {
      var ctx = this.ctx;
      var current = this.current;
      var font = current.font;
      var textRenderingMode = current.textRenderingMode;
      var fontSize = current.fontSize / current.fontSizeScale;
      var fillStrokeMode = textRenderingMode &
        TextRenderingMode.FILL_STROKE_MASK;
      var isAddToPathSet = !!(textRenderingMode &
        TextRenderingMode.ADD_TO_PATH_FLAG);

      var addToPath;
      if (font.disableFontFace || isAddToPathSet) {
        addToPath = font.getPathGenerator(this.commonObjs, character);
      }

      if (font.disableFontFace) {
        ctx.save();
        ctx.translate(x, y);
        ctx.beginPath();
        addToPath(ctx, fontSize);
        if (fillStrokeMode === TextRenderingMode.FILL ||
            fillStrokeMode === TextRenderingMode.FILL_STROKE) {
          ctx.fill();
        }
        if (fillStrokeMode === TextRenderingMode.STROKE ||
            fillStrokeMode === TextRenderingMode.FILL_STROKE) {
          ctx.stroke();
        }
        ctx.restore();
      } else {
        if (fillStrokeMode === TextRenderingMode.FILL ||
            fillStrokeMode === TextRenderingMode.FILL_STROKE) {
          ctx.fillText(character, x, y);
        }
        if (fillStrokeMode === TextRenderingMode.STROKE ||
            fillStrokeMode === TextRenderingMode.FILL_STROKE) {
          ctx.strokeText(character, x, y);
        }
      }

      if (isAddToPathSet) {
        var paths = this.pendingTextPaths || (this.pendingTextPaths = []);
        paths.push({
          transform: ctx.mozCurrentTransform,
          x: x,
          y: y,
          fontSize: fontSize,
          addToPath: addToPath
        });
      }
    },

    get isFontSubpixelAAEnabled() {
      // Checks if anti-aliasing is enabled when scaled text is painted.
      // On Windows GDI scaled fonts looks bad.
      var ctx = document.createElement('canvas').getContext('2d');
      ctx.scale(1.5, 1);
      ctx.fillText('I', 0, 10);
      var data = ctx.getImageData(0, 0, 10, 10).data;
      var enabled = false;
      for (var i = 3; i < data.length; i += 4) {
        if (data[i] > 0 && data[i] < 255) {
          enabled = true;
          break;
        }
      }
      return shadow(this, 'isFontSubpixelAAEnabled', enabled);
    },

    showText: function CanvasGraphics_showText(glyphs) {
      var current = this.current;
      var font = current.font;
      if (font.isType3Font) {
        return this.showType3Text(glyphs);
      }

      var fontSize = current.fontSize;
      if (fontSize === 0) {
        return;
      }

      var ctx = this.ctx;
      var fontSizeScale = current.fontSizeScale;
      var charSpacing = current.charSpacing;
      var wordSpacing = current.wordSpacing;
      var fontDirection = current.fontDirection;
      var textHScale = current.textHScale * fontDirection;
      var glyphsLength = glyphs.length;
      var vertical = font.vertical;
      var spacingDir = vertical ? 1 : -1;
      var defaultVMetrics = font.defaultVMetrics;
      var widthAdvanceScale = fontSize * current.fontMatrix[0];

      var simpleFillText =
        current.textRenderingMode === TextRenderingMode.FILL &&
        !font.disableFontFace;

      ctx.save();
      ctx.transform.apply(ctx, current.textMatrix);
      ctx.translate(current.x, current.y + current.textRise);

      if (current.patternFill) {
        // TODO: Some shading patterns are not applied correctly to text,
        //       e.g. issues 3988 and 5432, and ShowText-ShadingPattern.pdf.
        ctx.fillStyle = current.fillColor.getPattern(ctx, this);
      }

      if (fontDirection > 0) {
        ctx.scale(textHScale, -1);
      } else {
        ctx.scale(textHScale, 1);
      }

      var lineWidth = current.lineWidth;
      var scale = current.textMatrixScale;
      if (scale === 0 || lineWidth === 0) {
        var fillStrokeMode = current.textRenderingMode &
          TextRenderingMode.FILL_STROKE_MASK;
        if (fillStrokeMode === TextRenderingMode.STROKE ||
            fillStrokeMode === TextRenderingMode.FILL_STROKE) {
          this.cachedGetSinglePixelWidth = null;
          lineWidth = this.getSinglePixelWidth() * MIN_WIDTH_FACTOR;
        }
      } else {
        lineWidth /= scale;
      }

      if (fontSizeScale !== 1.0) {
        ctx.scale(fontSizeScale, fontSizeScale);
        lineWidth /= fontSizeScale;
      }

      ctx.lineWidth = lineWidth;

      var x = 0, i;
      for (i = 0; i < glyphsLength; ++i) {
        var glyph = glyphs[i];
        if (isNum(glyph)) {
          x += spacingDir * glyph * fontSize / 1000;
          continue;
        }

        var restoreNeeded = false;
        var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
        var character = glyph.fontChar;
        var accent = glyph.accent;
        var scaledX, scaledY, scaledAccentX, scaledAccentY;
        var width = glyph.width;
        if (vertical) {
          var vmetric, vx, vy;
          vmetric = glyph.vmetric || defaultVMetrics;
          vx = glyph.vmetric ? vmetric[1] : width * 0.5;
          vx = -vx * widthAdvanceScale;
          vy = vmetric[2] * widthAdvanceScale;

          width = vmetric ? -vmetric[0] : width;
          scaledX = vx / fontSizeScale;
          scaledY = (x + vy) / fontSizeScale;
        } else {
          scaledX = x / fontSizeScale;
          scaledY = 0;
        }

        if (font.remeasure && width > 0) {
          // Some standard fonts may not have the exact width: rescale per
          // character if measured width is greater than expected glyph width
          // and subpixel-aa is enabled, otherwise just center the glyph.
          var measuredWidth = ctx.measureText(character).width * 1000 /
            fontSize * fontSizeScale;
          if (width < measuredWidth && this.isFontSubpixelAAEnabled) {
            var characterScaleX = width / measuredWidth;
            restoreNeeded = true;
            ctx.save();
            ctx.scale(characterScaleX, 1);
            scaledX /= characterScaleX;
          } else if (width !== measuredWidth) {
            scaledX += (width - measuredWidth) / 2000 *
              fontSize / fontSizeScale;
          }
        }

        // Only attempt to draw the glyph if it is actually in the embedded font
        // file or if there isn't a font file so the fallback font is shown.
        if (glyph.isInFont || font.missingFile) {
          if (simpleFillText && !accent) {
            // common case
            ctx.fillText(character, scaledX, scaledY);
          } else {
            this.paintChar(character, scaledX, scaledY);
            if (accent) {
              scaledAccentX = scaledX + accent.offset.x / fontSizeScale;
              scaledAccentY = scaledY - accent.offset.y / fontSizeScale;
              this.paintChar(accent.fontChar, scaledAccentX, scaledAccentY);
            }
          }
        }

        var charWidth = width * widthAdvanceScale + spacing * fontDirection;
        x += charWidth;

        if (restoreNeeded) {
          ctx.restore();
        }
      }
      if (vertical) {
        current.y -= x * textHScale;
      } else {
        current.x += x * textHScale;
      }
      ctx.restore();
    },

    showType3Text: function CanvasGraphics_showType3Text(glyphs) {
      // Type3 fonts - each glyph is a "mini-PDF"
      var ctx = this.ctx;
      var current = this.current;
      var font = current.font;
      var fontSize = current.fontSize;
      var fontDirection = current.fontDirection;
      var spacingDir = font.vertical ? 1 : -1;
      var charSpacing = current.charSpacing;
      var wordSpacing = current.wordSpacing;
      var textHScale = current.textHScale * fontDirection;
      var fontMatrix = current.fontMatrix || FONT_IDENTITY_MATRIX;
      var glyphsLength = glyphs.length;
      var isTextInvisible =
        current.textRenderingMode === TextRenderingMode.INVISIBLE;
      var i, glyph, width, spacingLength;

      if (isTextInvisible || fontSize === 0) {
        return;
      }
      this.cachedGetSinglePixelWidth = null;

      ctx.save();
      ctx.transform.apply(ctx, current.textMatrix);
      ctx.translate(current.x, current.y);

      ctx.scale(textHScale, fontDirection);

      for (i = 0; i < glyphsLength; ++i) {
        glyph = glyphs[i];
        if (isNum(glyph)) {
          spacingLength = spacingDir * glyph * fontSize / 1000;
          this.ctx.translate(spacingLength, 0);
          current.x += spacingLength * textHScale;
          continue;
        }

        var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
        var operatorList = font.charProcOperatorList[glyph.operatorListId];
        if (!operatorList) {
          warn('Type3 character \"' + glyph.operatorListId +
               '\" is not available');
          continue;
        }
        this.processingType3 = glyph;
        this.save();
        ctx.scale(fontSize, fontSize);
        ctx.transform.apply(ctx, fontMatrix);
        this.executeOperatorList(operatorList);
        this.restore();

        var transformed = Util.applyTransform([glyph.width, 0], fontMatrix);
        width = transformed[0] * fontSize + spacing;

        ctx.translate(width, 0);
        current.x += width * textHScale;
      }
      ctx.restore();
      this.processingType3 = null;
    },

    // Type3 fonts
    setCharWidth: function CanvasGraphics_setCharWidth(xWidth, yWidth) {
      // We can safely ignore this since the width should be the same
      // as the width in the Widths array.
    },
    setCharWidthAndBounds: function CanvasGraphics_setCharWidthAndBounds(xWidth,
                                                                        yWidth,
                                                                        llx,
                                                                        lly,
                                                                        urx,
                                                                        ury) {
      // TODO According to the spec we're also suppose to ignore any operators
      // that set color or include images while processing this type3 font.
      this.ctx.rect(llx, lly, urx - llx, ury - lly);
      this.clip();
      this.endPath();
    },

    // Color
    getColorN_Pattern: function CanvasGraphics_getColorN_Pattern(IR) {
      var pattern;
      if (IR[0] === 'TilingPattern') {
        var color = IR[1];
        var baseTransform = this.baseTransform ||
                            this.ctx.mozCurrentTransform.slice();
        var self = this;
        var canvasGraphicsFactory = {
          createCanvasGraphics: function (ctx) {
            return new CanvasGraphics(ctx, self.commonObjs, self.objs);
          }
        };
        pattern = new TilingPattern(IR, color, this.ctx, canvasGraphicsFactory,
                                    baseTransform);
      } else {
        pattern = getShadingPatternFromIR(IR);
      }
      return pattern;
    },
    setStrokeColorN: function CanvasGraphics_setStrokeColorN(/*...*/) {
      this.current.strokeColor = this.getColorN_Pattern(arguments);
    },
    setFillColorN: function CanvasGraphics_setFillColorN(/*...*/) {
      this.current.fillColor = this.getColorN_Pattern(arguments);
      this.current.patternFill = true;
    },
    setStrokeRGBColor: function CanvasGraphics_setStrokeRGBColor(r, g, b) {
      var color = Util.makeCssRgb(r, g, b);
      this.ctx.strokeStyle = color;
      this.current.strokeColor = color;
    },
    setFillRGBColor: function CanvasGraphics_setFillRGBColor(r, g, b) {
      var color = Util.makeCssRgb(r, g, b);
      this.ctx.fillStyle = color;
      this.current.fillColor = color;
      this.current.patternFill = false;
    },

    shadingFill: function CanvasGraphics_shadingFill(patternIR) {
      var ctx = this.ctx;

      this.save();
      var pattern = getShadingPatternFromIR(patternIR);
      ctx.fillStyle = pattern.getPattern(ctx, this, true);

      var inv = ctx.mozCurrentTransformInverse;
      if (inv) {
        var canvas = ctx.canvas;
        var width = canvas.width;
        var height = canvas.height;

        var bl = Util.applyTransform([0, 0], inv);
        var br = Util.applyTransform([0, height], inv);
        var ul = Util.applyTransform([width, 0], inv);
        var ur = Util.applyTransform([width, height], inv);

        var x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
        var y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
        var x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
        var y1 = Math.max(bl[1], br[1], ul[1], ur[1]);

        this.ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
      } else {
        // HACK to draw the gradient onto an infinite rectangle.
        // PDF gradients are drawn across the entire image while
        // Canvas only allows gradients to be drawn in a rectangle
        // The following bug should allow us to remove this.
        // https://bugzilla.mozilla.org/show_bug.cgi?id=664884

        this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
      }

      this.restore();
    },

    // Images
    beginInlineImage: function CanvasGraphics_beginInlineImage() {
      error('Should not call beginInlineImage');
    },
    beginImageData: function CanvasGraphics_beginImageData() {
      error('Should not call beginImageData');
    },

    paintFormXObjectBegin: function CanvasGraphics_paintFormXObjectBegin(matrix,
                                                                        bbox) {
      this.save();
      this.baseTransformStack.push(this.baseTransform);

      if (isArray(matrix) && 6 === matrix.length) {
        this.transform.apply(this, matrix);
      }

      this.baseTransform = this.ctx.mozCurrentTransform;

      if (isArray(bbox) && 4 === bbox.length) {
        var width = bbox[2] - bbox[0];
        var height = bbox[3] - bbox[1];
        this.ctx.rect(bbox[0], bbox[1], width, height);
        this.clip();
        this.endPath();
      }
    },

    paintFormXObjectEnd: function CanvasGraphics_paintFormXObjectEnd() {
      this.restore();
      this.baseTransform = this.baseTransformStack.pop();
    },

    beginGroup: function CanvasGraphics_beginGroup(group) {
      this.save();
      var currentCtx = this.ctx;
      // TODO non-isolated groups - according to Rik at adobe non-isolated
      // group results aren't usually that different and they even have tools
      // that ignore this setting. Notes from Rik on implementing:
      // - When you encounter an transparency group, create a new canvas with
      // the dimensions of the bbox
      // - copy the content from the previous canvas to the new canvas
      // - draw as usual
      // - remove the backdrop alpha:
      // alphaNew = 1 - (1 - alpha)/(1 - alphaBackdrop) with 'alpha' the alpha
      // value of your transparency group and 'alphaBackdrop' the alpha of the
      // backdrop
      // - remove background color:
      // colorNew = color - alphaNew *colorBackdrop /(1 - alphaNew)
      if (!group.isolated) {
        info('TODO: Support non-isolated groups.');
      }

      // TODO knockout - supposedly possible with the clever use of compositing
      // modes.
      if (group.knockout) {
        warn('Knockout groups not supported.');
      }

      var currentTransform = currentCtx.mozCurrentTransform;
      if (group.matrix) {
        currentCtx.transform.apply(currentCtx, group.matrix);
      }
      assert(group.bbox, 'Bounding box is required.');

      // Based on the current transform figure out how big the bounding box
      // will actually be.
      var bounds = Util.getAxialAlignedBoundingBox(
                    group.bbox,
                    currentCtx.mozCurrentTransform);
      // Clip the bounding box to the current canvas.
      var canvasBounds = [0,
                          0,
                          currentCtx.canvas.width,
                          currentCtx.canvas.height];
      bounds = Util.intersect(bounds, canvasBounds) || [0, 0, 0, 0];
      // Use ceil in case we're between sizes so we don't create canvas that is
      // too small and make the canvas at least 1x1 pixels.
      var offsetX = Math.floor(bounds[0]);
      var offsetY = Math.floor(bounds[1]);
      var drawnWidth = Math.max(Math.ceil(bounds[2]) - offsetX, 1);
      var drawnHeight = Math.max(Math.ceil(bounds[3]) - offsetY, 1);
      var scaleX = 1, scaleY = 1;
      if (drawnWidth > MAX_GROUP_SIZE) {
        scaleX = drawnWidth / MAX_GROUP_SIZE;
        drawnWidth = MAX_GROUP_SIZE;
      }
      if (drawnHeight > MAX_GROUP_SIZE) {
        scaleY = drawnHeight / MAX_GROUP_SIZE;
        drawnHeight = MAX_GROUP_SIZE;
      }

      var cacheId = 'groupAt' + this.groupLevel;
      if (group.smask) {
        // Using two cache entries is case if masks are used one after another.
        cacheId +=  '_smask_' + ((this.smaskCounter++) % 2);
      }
      var scratchCanvas = this.cachedCanvases.getCanvas(
        cacheId, drawnWidth, drawnHeight, true);
      var groupCtx = scratchCanvas.context;

      // Since we created a new canvas that is just the size of the bounding box
      // we have to translate the group ctx.
      groupCtx.scale(1 / scaleX, 1 / scaleY);
      groupCtx.translate(-offsetX, -offsetY);
      groupCtx.transform.apply(groupCtx, currentTransform);

      if (group.smask) {
        // Saving state and cached mask to be used in setGState.
        this.smaskStack.push({
          canvas: scratchCanvas.canvas,
          context: groupCtx,
          offsetX: offsetX,
          offsetY: offsetY,
          scaleX: scaleX,
          scaleY: scaleY,
          subtype: group.smask.subtype,
          backdrop: group.smask.backdrop,
          transferMap: group.smask.transferMap || null,
          startTransformInverse: null, // used during suspend operation
        });
      } else {
        // Setup the current ctx so when the group is popped we draw it at the
        // right location.
        currentCtx.setTransform(1, 0, 0, 1, 0, 0);
        currentCtx.translate(offsetX, offsetY);
        currentCtx.scale(scaleX, scaleY);
      }
      // The transparency group inherits all off the current graphics state
      // except the blend mode, soft mask, and alpha constants.
      copyCtxState(currentCtx, groupCtx);
      this.ctx = groupCtx;
      this.setGState([
        ['BM', 'Normal'],
        ['ca', 1],
        ['CA', 1]
      ]);
      this.groupStack.push(currentCtx);
      this.groupLevel++;

      // Reseting mask state, masks will be applied on restore of the group.
      this.current.activeSMask = null;
    },

    endGroup: function CanvasGraphics_endGroup(group) {
      this.groupLevel--;
      var groupCtx = this.ctx;
      this.ctx = this.groupStack.pop();
      // Turn off image smoothing to avoid sub pixel interpolation which can
      // look kind of blurry for some pdfs.
      if (this.ctx.imageSmoothingEnabled !== undefined) {
        this.ctx.imageSmoothingEnabled = false;
      } else {
        this.ctx.mozImageSmoothingEnabled = false;
      }
      if (group.smask) {
        this.tempSMask = this.smaskStack.pop();
      } else {
        this.ctx.drawImage(groupCtx.canvas, 0, 0);
      }
      this.restore();
    },

    beginAnnotations: function CanvasGraphics_beginAnnotations() {
      this.save();
      this.current = new CanvasExtraState();

      if (this.baseTransform) {
        this.ctx.setTransform.apply(this.ctx, this.baseTransform);
      }
    },

    endAnnotations: function CanvasGraphics_endAnnotations() {
      this.restore();
    },

    beginAnnotation: function CanvasGraphics_beginAnnotation(rect, transform,
                                                             matrix) {
      this.save();

      if (isArray(rect) && 4 === rect.length) {
        var width = rect[2] - rect[0];
        var height = rect[3] - rect[1];
        this.ctx.rect(rect[0], rect[1], width, height);
        this.clip();
        this.endPath();
      }

      this.transform.apply(this, transform);
      this.transform.apply(this, matrix);
    },

    endAnnotation: function CanvasGraphics_endAnnotation() {
      this.restore();
    },

    paintJpegXObject: function CanvasGraphics_paintJpegXObject(objId, w, h) {
      var domImage = this.objs.get(objId);
      if (!domImage) {
        warn('Dependent image isn\'t ready yet');
        return;
      }

      this.save();

      var ctx = this.ctx;
      // scale the image to the unit square
      ctx.scale(1 / w, -1 / h);

      ctx.drawImage(domImage, 0, 0, domImage.width, domImage.height,
                    0, -h, w, h);
      if (this.imageLayer) {
        var currentTransform = ctx.mozCurrentTransformInverse;
        var position = this.getCanvasPosition(0, 0);
        this.imageLayer.appendImage({
          objId: objId,
          left: position[0],
          top: position[1],
          width: w / currentTransform[0],
          height: h / currentTransform[3]
        });
      }
      this.restore();
    },

    paintImageMaskXObject: function CanvasGraphics_paintImageMaskXObject(img) {
      var ctx = this.ctx;
      var width = img.width, height = img.height;
      var fillColor = this.current.fillColor;
      var isPatternFill = this.current.patternFill;

      var glyph = this.processingType3;

      if (COMPILE_TYPE3_GLYPHS && glyph && glyph.compiled === undefined) {
        if (width <= MAX_SIZE_TO_COMPILE && height <= MAX_SIZE_TO_COMPILE) {
          glyph.compiled =
            compileType3Glyph({data: img.data, width: width, height: height});
        } else {
          glyph.compiled = null;
        }
      }

      if (glyph && glyph.compiled) {
        glyph.compiled(ctx);
        return;
      }

      var maskCanvas = this.cachedCanvases.getCanvas('maskCanvas',
                                                     width, height);
      var maskCtx = maskCanvas.context;
      maskCtx.save();

      putBinaryImageMask(maskCtx, img);

      maskCtx.globalCompositeOperation = 'source-in';

      maskCtx.fillStyle = isPatternFill ?
                          fillColor.getPattern(maskCtx, this) : fillColor;
      maskCtx.fillRect(0, 0, width, height);

      maskCtx.restore();

      this.paintInlineImageXObject(maskCanvas.canvas);
    },

    paintImageMaskXObjectRepeat:
      function CanvasGraphics_paintImageMaskXObjectRepeat(imgData, scaleX,
                                                          scaleY, positions) {
      var width = imgData.width;
      var height = imgData.height;
      var fillColor = this.current.fillColor;
      var isPatternFill = this.current.patternFill;

      var maskCanvas = this.cachedCanvases.getCanvas('maskCanvas',
                                                     width, height);
      var maskCtx = maskCanvas.context;
      maskCtx.save();

      putBinaryImageMask(maskCtx, imgData);

      maskCtx.globalCompositeOperation = 'source-in';

      maskCtx.fillStyle = isPatternFill ?
                          fillColor.getPattern(maskCtx, this) : fillColor;
      maskCtx.fillRect(0, 0, width, height);

      maskCtx.restore();

      var ctx = this.ctx;
      for (var i = 0, ii = positions.length; i < ii; i += 2) {
        ctx.save();
        ctx.transform(scaleX, 0, 0, scaleY, positions[i], positions[i + 1]);
        ctx.scale(1, -1);
        ctx.drawImage(maskCanvas.canvas, 0, 0, width, height,
          0, -1, 1, 1);
        ctx.restore();
      }
    },

    paintImageMaskXObjectGroup:
      function CanvasGraphics_paintImageMaskXObjectGroup(images) {
      var ctx = this.ctx;

      var fillColor = this.current.fillColor;
      var isPatternFill = this.current.patternFill;
      for (var i = 0, ii = images.length; i < ii; i++) {
        var image = images[i];
        var width = image.width, height = image.height;

        var maskCanvas = this.cachedCanvases.getCanvas('maskCanvas',
                                                       width, height);
        var maskCtx = maskCanvas.context;
        maskCtx.save();

        putBinaryImageMask(maskCtx, image);

        maskCtx.globalCompositeOperation = 'source-in';

        maskCtx.fillStyle = isPatternFill ?
                            fillColor.getPattern(maskCtx, this) : fillColor;
        maskCtx.fillRect(0, 0, width, height);

        maskCtx.restore();

        ctx.save();
        ctx.transform.apply(ctx, image.transform);
        ctx.scale(1, -1);
        ctx.drawImage(maskCanvas.canvas, 0, 0, width, height,
                      0, -1, 1, 1);
        ctx.restore();
      }
    },

    paintImageXObject: function CanvasGraphics_paintImageXObject(objId) {
      var imgData = this.objs.get(objId);
      if (!imgData) {
        warn('Dependent image isn\'t ready yet');
        return;
      }

      this.paintInlineImageXObject(imgData);
    },

    paintImageXObjectRepeat:
      function CanvasGraphics_paintImageXObjectRepeat(objId, scaleX, scaleY,
                                                          positions) {
      var imgData = this.objs.get(objId);
      if (!imgData) {
        warn('Dependent image isn\'t ready yet');
        return;
      }

      var width = imgData.width;
      var height = imgData.height;
      var map = [];
      for (var i = 0, ii = positions.length; i < ii; i += 2) {
        map.push({transform: [scaleX, 0, 0, scaleY, positions[i],
                 positions[i + 1]], x: 0, y: 0, w: width, h: height});
      }
      this.paintInlineImageXObjectGroup(imgData, map);
    },

    paintInlineImageXObject:
      function CanvasGraphics_paintInlineImageXObject(imgData) {
      var width = imgData.width;
      var height = imgData.height;
      var ctx = this.ctx;

      this.save();
      // scale the image to the unit square
      ctx.scale(1 / width, -1 / height);

      var currentTransform = ctx.mozCurrentTransformInverse;
      var a = currentTransform[0], b = currentTransform[1];
      var widthScale = Math.max(Math.sqrt(a * a + b * b), 1);
      var c = currentTransform[2], d = currentTransform[3];
      var heightScale = Math.max(Math.sqrt(c * c + d * d), 1);

      var imgToPaint, tmpCanvas;
      // instanceof HTMLElement does not work in jsdom node.js module
      if (imgData instanceof HTMLElement || !imgData.data) {
        imgToPaint = imgData;
      } else {
        tmpCanvas = this.cachedCanvases.getCanvas('inlineImage',
                                                  width, height);
        var tmpCtx = tmpCanvas.context;
        putBinaryImageData(tmpCtx, imgData);
        imgToPaint = tmpCanvas.canvas;
      }

      var paintWidth = width, paintHeight = height;
      var tmpCanvasId = 'prescale1';
      // Vertial or horizontal scaling shall not be more than 2 to not loose the
      // pixels during drawImage operation, painting on the temporary canvas(es)
      // that are twice smaller in size
      while ((widthScale > 2 && paintWidth > 1) ||
             (heightScale > 2 && paintHeight > 1)) {
        var newWidth = paintWidth, newHeight = paintHeight;
        if (widthScale > 2 && paintWidth > 1) {
          newWidth = Math.ceil(paintWidth / 2);
          widthScale /= paintWidth / newWidth;
        }
        if (heightScale > 2 && paintHeight > 1) {
          newHeight = Math.ceil(paintHeight / 2);
          heightScale /= paintHeight / newHeight;
        }
        tmpCanvas = this.cachedCanvases.getCanvas(tmpCanvasId,
                                                  newWidth, newHeight);
        tmpCtx = tmpCanvas.context;
        tmpCtx.clearRect(0, 0, newWidth, newHeight);
        tmpCtx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight,
                                     0, 0, newWidth, newHeight);
        imgToPaint = tmpCanvas.canvas;
        paintWidth = newWidth;
        paintHeight = newHeight;
        tmpCanvasId = tmpCanvasId === 'prescale1' ? 'prescale2' : 'prescale1';
      }
      ctx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight,
                                0, -height, width, height);

      if (this.imageLayer) {
        var position = this.getCanvasPosition(0, -height);
        this.imageLayer.appendImage({
          imgData: imgData,
          left: position[0],
          top: position[1],
          width: width / currentTransform[0],
          height: height / currentTransform[3]
        });
      }
      this.restore();
    },

    paintInlineImageXObjectGroup:
      function CanvasGraphics_paintInlineImageXObjectGroup(imgData, map) {
      var ctx = this.ctx;
      var w = imgData.width;
      var h = imgData.height;

      var tmpCanvas = this.cachedCanvases.getCanvas('inlineImage', w, h);
      var tmpCtx = tmpCanvas.context;
      putBinaryImageData(tmpCtx, imgData);

      for (var i = 0, ii = map.length; i < ii; i++) {
        var entry = map[i];
        ctx.save();
        ctx.transform.apply(ctx, entry.transform);
        ctx.scale(1, -1);
        ctx.drawImage(tmpCanvas.canvas, entry.x, entry.y, entry.w, entry.h,
                      0, -1, 1, 1);
        if (this.imageLayer) {
          var position = this.getCanvasPosition(entry.x, entry.y);
          this.imageLayer.appendImage({
            imgData: imgData,
            left: position[0],
            top: position[1],
            width: w,
            height: h
          });
        }
        ctx.restore();
      }
    },

    paintSolidColorImageMask:
      function CanvasGraphics_paintSolidColorImageMask() {
        this.ctx.fillRect(0, 0, 1, 1);
    },

    paintXObject: function CanvasGraphics_paintXObject() {
      warn('Unsupported \'paintXObject\' command.');
    },

    // Marked content

    markPoint: function CanvasGraphics_markPoint(tag) {
      // TODO Marked content.
    },
    markPointProps: function CanvasGraphics_markPointProps(tag, properties) {
      // TODO Marked content.
    },
    beginMarkedContent: function CanvasGraphics_beginMarkedContent(tag) {
      // TODO Marked content.
    },
    beginMarkedContentProps: function CanvasGraphics_beginMarkedContentProps(
                                        tag, properties) {
      // TODO Marked content.
    },
    endMarkedContent: function CanvasGraphics_endMarkedContent() {
      // TODO Marked content.
    },

    // Compatibility

    beginCompat: function CanvasGraphics_beginCompat() {
      // TODO ignore undefined operators (should we do that anyway?)
    },
    endCompat: function CanvasGraphics_endCompat() {
      // TODO stop ignoring undefined operators
    },

    // Helper functions

    consumePath: function CanvasGraphics_consumePath() {
      var ctx = this.ctx;
      if (this.pendingClip) {
        if (this.pendingClip === EO_CLIP) {
          if (ctx.mozFillRule !== undefined) {
            ctx.mozFillRule = 'evenodd';
            ctx.clip();
            ctx.mozFillRule = 'nonzero';
          } else {
            ctx.clip('evenodd');
          }
        } else {
          ctx.clip();
        }
        this.pendingClip = null;
      }
      ctx.beginPath();
    },
    getSinglePixelWidth: function CanvasGraphics_getSinglePixelWidth(scale) {
      if (this.cachedGetSinglePixelWidth === null) {
        // NOTE: The `save` and `restore` commands used below is a workaround
        // that is necessary in order to prevent `mozCurrentTransformInverse`
        // from intermittently returning incorrect values in Firefox, see:
        // https://github.com/mozilla/pdf.js/issues/7188.
        this.ctx.save();
        var inverse = this.ctx.mozCurrentTransformInverse;
        this.ctx.restore();
        // max of the current horizontal and vertical scale
        this.cachedGetSinglePixelWidth = Math.sqrt(Math.max(
          (inverse[0] * inverse[0] + inverse[1] * inverse[1]),
          (inverse[2] * inverse[2] + inverse[3] * inverse[3])));
      }
      return this.cachedGetSinglePixelWidth;
    },
    getCanvasPosition: function CanvasGraphics_getCanvasPosition(x, y) {
      var transform = this.ctx.mozCurrentTransform;
      return [
        transform[0] * x + transform[2] * y + transform[4],
        transform[1] * x + transform[3] * y + transform[5]
      ];
    }
  };

  for (var op in OPS) {
    CanvasGraphics.prototype[OPS[op]] = CanvasGraphics.prototype[op];
  }

  return CanvasGraphics;
})();

exports.CanvasGraphics = CanvasGraphics;
exports.createScratchCanvas = createScratchCanvas;
}));


(function (root, factory) {
  {
    factory((root.pdfjsDisplayAPI = {}), root.pdfjsSharedUtil,
      root.pdfjsDisplayFontLoader, root.pdfjsDisplayCanvas,
      root.pdfjsDisplayMetadata, root.pdfjsDisplayDOMUtils);
  }
}(this, function (exports, sharedUtil, displayFontLoader, displayCanvas,
                  displayMetadata, displayDOMUtils, amdRequire) {

var InvalidPDFException = sharedUtil.InvalidPDFException;
var MessageHandler = sharedUtil.MessageHandler;
var MissingPDFException = sharedUtil.MissingPDFException;
var PageViewport = sharedUtil.PageViewport;
var PasswordResponses = sharedUtil.PasswordResponses;
var PasswordException = sharedUtil.PasswordException;
var StatTimer = sharedUtil.StatTimer;
var UnexpectedResponseException = sharedUtil.UnexpectedResponseException;
var UnknownErrorException = sharedUtil.UnknownErrorException;
var Util = sharedUtil.Util;
var createPromiseCapability = sharedUtil.createPromiseCapability;
var error = sharedUtil.error;
var deprecated = sharedUtil.deprecated;
var getVerbosityLevel = sharedUtil.getVerbosityLevel;
var info = sharedUtil.info;
var isArrayBuffer = sharedUtil.isArrayBuffer;
var isSameOrigin = sharedUtil.isSameOrigin;
var loadJpegStream = sharedUtil.loadJpegStream;
var stringToBytes = sharedUtil.stringToBytes;
var globalScope = sharedUtil.globalScope;
var warn = sharedUtil.warn;
var FontFaceObject = displayFontLoader.FontFaceObject;
var FontLoader = displayFontLoader.FontLoader;
var CanvasGraphics = displayCanvas.CanvasGraphics;
var createScratchCanvas = displayCanvas.createScratchCanvas;
var Metadata = displayMetadata.Metadata;
var getDefaultSetting = displayDOMUtils.getDefaultSetting;

var DEFAULT_RANGE_CHUNK_SIZE = 65536; // 2^16 = 65536

var isWorkerDisabled = false;
var workerSrc;
var isPostMessageTransfersDisabled = false;


var useRequireEnsure = false;
if (typeof window === 'undefined') {
  // node.js - disable worker and set require.ensure.
  isWorkerDisabled = true;
  if (false) {
    require.ensure = require('node-ensure');
  }
  useRequireEnsure = true;
}
if (true) {
  useRequireEnsure = true;
}
if (typeof requirejs !== 'undefined' && requirejs.toUrl) {
  workerSrc = requirejs.toUrl('pdfjs-dist/build/pdf.worker.js');
}
var dynamicLoaderSupported = typeof requirejs !== 'undefined' && requirejs.load;
var fakeWorkerFilesLoader = useRequireEnsure ? (function (callback) {
  __webpack_require__.e/* nsure */(1).catch(function(err) { __webpack_require__.oe(err); }).then((function () {
    var worker = __webpack_require__(769);
    callback(worker.WorkerMessageHandler);
  }).bind(null, __webpack_require__));
}) : dynamicLoaderSupported ? (function (callback) {
  requirejs(['pdfjs-dist/build/pdf.worker'], function (worker) {
    callback(worker.WorkerMessageHandler);
  });
}) : null;


/**
 * Document initialization / loading parameters object.
 *
 * @typedef {Object} DocumentInitParameters
 * @property {string}     url   - The URL of the PDF.
 * @property {TypedArray|Array|string} data - Binary PDF data. Use typed arrays
 *   (Uint8Array) to improve the memory usage. If PDF data is BASE64-encoded,
 *   use atob() to convert it to a binary string first.
 * @property {Object}     httpHeaders - Basic authentication headers.
 * @property {boolean}    withCredentials - Indicates whether or not cross-site
 *   Access-Control requests should be made using credentials such as cookies
 *   or authorization headers. The default is false.
 * @property {string}     password - For decrypting password-protected PDFs.
 * @property {TypedArray} initialData - A typed array with the first portion or
 *   all of the pdf data. Used by the extension since some data is already
 *   loaded before the switch to range requests.
 * @property {number}     length - The PDF file length. It's used for progress
 *   reports and range requests operations.
 * @property {PDFDataRangeTransport} range
 * @property {number}     rangeChunkSize - Optional parameter to specify
 *   maximum number of bytes fetched per range request. The default value is
 *   2^16 = 65536.
 * @property {PDFWorker}  worker - The worker that will be used for the loading
 *   and parsing of the PDF data.
 */

/**
 * @typedef {Object} PDFDocumentStats
 * @property {Array} streamTypes - Used stream types in the document (an item
 *   is set to true if specific stream ID was used in the document).
 * @property {Array} fontTypes - Used font type in the document (an item is set
 *   to true if specific font ID was used in the document).
 */

/**
 * This is the main entry point for loading a PDF and interacting with it.
 * NOTE: If a URL is used to fetch the PDF data a standard XMLHttpRequest(XHR)
 * is used, which means it must follow the same origin rules that any XHR does
 * e.g. No cross domain requests without CORS.
 *
 * @param {string|TypedArray|DocumentInitParameters|PDFDataRangeTransport} src
 * Can be a url to where a PDF is located, a typed array (Uint8Array)
 * already populated with data or parameter object.
 *
 * @param {PDFDataRangeTransport} pdfDataRangeTransport (deprecated) It is used
 * if you want to manually serve range requests for data in the PDF.
 *
 * @param {function} passwordCallback (deprecated) It is used to request a
 * password if wrong or no password was provided. The callback receives two
 * parameters: function that needs to be called with new password and reason
 * (see {PasswordResponses}).
 *
 * @param {function} progressCallback (deprecated) It is used to be able to
 * monitor the loading progress of the PDF file (necessary to implement e.g.
 * a loading bar). The callback receives an {Object} with the properties:
 * {number} loaded and {number} total.
 *
 * @return {PDFDocumentLoadingTask}
 */
function getDocument(src, pdfDataRangeTransport,
                     passwordCallback, progressCallback) {
  var task = new PDFDocumentLoadingTask();

  // Support of the obsolete arguments (for compatibility with API v1.0)
  if (arguments.length > 1) {
    deprecated('getDocument is called with pdfDataRangeTransport, ' +
               'passwordCallback or progressCallback argument');
  }
  if (pdfDataRangeTransport) {
    if (!(pdfDataRangeTransport instanceof PDFDataRangeTransport)) {
      // Not a PDFDataRangeTransport instance, trying to add missing properties.
      pdfDataRangeTransport = Object.create(pdfDataRangeTransport);
      pdfDataRangeTransport.length = src.length;
      pdfDataRangeTransport.initialData = src.initialData;
      if (!pdfDataRangeTransport.abort) {
        pdfDataRangeTransport.abort = function () {};
      }
    }
    src = Object.create(src);
    src.range = pdfDataRangeTransport;
  }
  task.onPassword = passwordCallback || null;
  task.onProgress = progressCallback || null;

  var source;
  if (typeof src === 'string') {
    source = { url: src };
  } else if (isArrayBuffer(src)) {
    source = { data: src };
  } else if (src instanceof PDFDataRangeTransport) {
    source = { range: src };
  } else {
    if (typeof src !== 'object') {
      error('Invalid parameter in getDocument, need either Uint8Array, ' +
        'string or a parameter object');
    }
    if (!src.url && !src.data && !src.range) {
      error('Invalid parameter object: need either .data, .range or .url');
    }

    source = src;
  }

  var params = {};
  var rangeTransport = null;
  var worker = null;
  for (var key in source) {
    if (key === 'url' && typeof window !== 'undefined') {
      // The full path is required in the 'url' field.
      params[key] = new URL(source[key], window.location).href;
      continue;
    } else if (key === 'range') {
      rangeTransport = source[key];
      continue;
    } else if (key === 'worker') {
      worker = source[key];
      continue;
    } else if (key === 'data' && !(source[key] instanceof Uint8Array)) {
      // Converting string or array-like data to Uint8Array.
      var pdfBytes = source[key];
      if (typeof pdfBytes === 'string') {
        params[key] = stringToBytes(pdfBytes);
      } else if (typeof pdfBytes === 'object' && pdfBytes !== null &&
                 !isNaN(pdfBytes.length)) {
        params[key] = new Uint8Array(pdfBytes);
      } else if (isArrayBuffer(pdfBytes)) {
        params[key] = new Uint8Array(pdfBytes);
      } else {
        error('Invalid PDF binary data: either typed array, string or ' +
              'array-like object is expected in the data property.');
      }
      continue;
    }
    params[key] = source[key];
  }

  params.rangeChunkSize = params.rangeChunkSize || DEFAULT_RANGE_CHUNK_SIZE;

  if (!worker) {
    // Worker was not provided -- creating and owning our own.
    worker = new PDFWorker();
    task._worker = worker;
  }
  var docId = task.docId;
  worker.promise.then(function () {
    if (task.destroyed) {
      throw new Error('Loading aborted');
    }
    return _fetchDocument(worker, params, rangeTransport, docId).then(
        function (workerId) {
      if (task.destroyed) {
        throw new Error('Loading aborted');
      }
      var messageHandler = new MessageHandler(docId, workerId, worker.port);
      var transport = new WorkerTransport(messageHandler, task, rangeTransport);
      task._transport = transport;
      messageHandler.send('Ready', null);
    });
  }).catch(task._capability.reject);

  return task;
}

/**
 * Starts fetching of specified PDF document/data.
 * @param {PDFWorker} worker
 * @param {Object} source
 * @param {PDFDataRangeTransport} pdfDataRangeTransport
 * @param {string} docId Unique document id, used as MessageHandler id.
 * @returns {Promise} The promise, which is resolved when worker id of
 *                    MessageHandler is known.
 * @private
 */
function _fetchDocument(worker, source, pdfDataRangeTransport, docId) {
  if (worker.destroyed) {
    return Promise.reject(new Error('Worker was destroyed'));
  }

  source.disableAutoFetch = getDefaultSetting('disableAutoFetch');
  source.disableStream = getDefaultSetting('disableStream');
  source.chunkedViewerLoading = !!pdfDataRangeTransport;
  if (pdfDataRangeTransport) {
    source.length = pdfDataRangeTransport.length;
    source.initialData = pdfDataRangeTransport.initialData;
  }
  return worker.messageHandler.sendWithPromise('GetDocRequest', {
    docId: docId,
    source: source,
    disableRange: getDefaultSetting('disableRange'),
    maxImageSize: getDefaultSetting('maxImageSize'),
    cMapUrl: getDefaultSetting('cMapUrl'),
    cMapPacked: getDefaultSetting('cMapPacked'),
    disableFontFace: getDefaultSetting('disableFontFace'),
    disableCreateObjectURL: getDefaultSetting('disableCreateObjectURL'),
    postMessageTransfers: getDefaultSetting('postMessageTransfers') &&
                          !isPostMessageTransfersDisabled,
  }).then(function (workerId) {
    if (worker.destroyed) {
      throw new Error('Worker was destroyed');
    }
    return workerId;
  });
}

/**
 * PDF document loading operation.
 * @class
 * @alias PDFDocumentLoadingTask
 */
var PDFDocumentLoadingTask = (function PDFDocumentLoadingTaskClosure() {
  var nextDocumentId = 0;

  /** @constructs PDFDocumentLoadingTask */
  function PDFDocumentLoadingTask() {
    this._capability = createPromiseCapability();
    this._transport = null;
    this._worker = null;

    /**
     * Unique document loading task id -- used in MessageHandlers.
     * @type {string}
     */
    this.docId = 'd' + (nextDocumentId++);

    /**
     * Shows if loading task is destroyed.
     * @type {boolean}
     */
    this.destroyed = false;

    /**
     * Callback to request a password if wrong or no password was provided.
     * The callback receives two parameters: function that needs to be called
     * with new password and reason (see {PasswordResponses}).
     */
    this.onPassword = null;

    /**
     * Callback to be able to monitor the loading progress of the PDF file
     * (necessary to implement e.g. a loading bar). The callback receives
     * an {Object} with the properties: {number} loaded and {number} total.
     */
    this.onProgress = null;

    /**
     * Callback to when unsupported feature is used. The callback receives
     * an {UNSUPPORTED_FEATURES} argument.
     */
    this.onUnsupportedFeature = null;
  }

  PDFDocumentLoadingTask.prototype =
      /** @lends PDFDocumentLoadingTask.prototype */ {
    /**
     * @return {Promise}
     */
    get promise() {
      return this._capability.promise;
    },

    /**
     * Aborts all network requests and destroys worker.
     * @return {Promise} A promise that is resolved after destruction activity
     *                   is completed.
     */
    destroy: function () {
      this.destroyed = true;

      var transportDestroyed = !this._transport ? Promise.resolve() :
        this._transport.destroy();
      return transportDestroyed.then(function () {
        this._transport = null;
        if (this._worker) {
          this._worker.destroy();
          this._worker = null;
        }
      }.bind(this));
    },

    /**
     * Registers callbacks to indicate the document loading completion.
     *
     * @param {function} onFulfilled The callback for the loading completion.
     * @param {function} onRejected The callback for the loading failure.
     * @return {Promise} A promise that is resolved after the onFulfilled or
     *                   onRejected callback.
     */
    then: function PDFDocumentLoadingTask_then(onFulfilled, onRejected) {
      return this.promise.then.apply(this.promise, arguments);
    }
  };

  return PDFDocumentLoadingTask;
})();

/**
 * Abstract class to support range requests file loading.
 * @class
 * @alias PDFDataRangeTransport
 * @param {number} length
 * @param {Uint8Array} initialData
 */
var PDFDataRangeTransport = (function pdfDataRangeTransportClosure() {
  function PDFDataRangeTransport(length, initialData) {
    this.length = length;
    this.initialData = initialData;

    this._rangeListeners = [];
    this._progressListeners = [];
    this._progressiveReadListeners = [];
    this._readyCapability = createPromiseCapability();
  }
  PDFDataRangeTransport.prototype =
      /** @lends PDFDataRangeTransport.prototype */ {
    addRangeListener:
        function PDFDataRangeTransport_addRangeListener(listener) {
      this._rangeListeners.push(listener);
    },

    addProgressListener:
        function PDFDataRangeTransport_addProgressListener(listener) {
      this._progressListeners.push(listener);
    },

    addProgressiveReadListener:
        function PDFDataRangeTransport_addProgressiveReadListener(listener) {
      this._progressiveReadListeners.push(listener);
    },

    onDataRange: function PDFDataRangeTransport_onDataRange(begin, chunk) {
      var listeners = this._rangeListeners;
      for (var i = 0, n = listeners.length; i < n; ++i) {
        listeners[i](begin, chunk);
      }
    },

    onDataProgress: function PDFDataRangeTransport_onDataProgress(loaded) {
      this._readyCapability.promise.then(function () {
        var listeners = this._progressListeners;
        for (var i = 0, n = listeners.length; i < n; ++i) {
          listeners[i](loaded);
        }
      }.bind(this));
    },

    onDataProgressiveRead:
        function PDFDataRangeTransport_onDataProgress(chunk) {
      this._readyCapability.promise.then(function () {
        var listeners = this._progressiveReadListeners;
        for (var i = 0, n = listeners.length; i < n; ++i) {
          listeners[i](chunk);
        }
      }.bind(this));
    },

    transportReady: function PDFDataRangeTransport_transportReady() {
      this._readyCapability.resolve();
    },

    requestDataRange:
        function PDFDataRangeTransport_requestDataRange(begin, end) {
      throw new Error('Abstract method PDFDataRangeTransport.requestDataRange');
    },

    abort: function PDFDataRangeTransport_abort() {
    }
  };
  return PDFDataRangeTransport;
})();

/**
 * Proxy to a PDFDocument in the worker thread. Also, contains commonly used
 * properties that can be read synchronously.
 * @class
 * @alias PDFDocumentProxy
 */
var PDFDocumentProxy = (function PDFDocumentProxyClosure() {
  function PDFDocumentProxy(pdfInfo, transport, loadingTask) {
    this.pdfInfo = pdfInfo;
    this.transport = transport;
    this.loadingTask = loadingTask;
  }
  PDFDocumentProxy.prototype = /** @lends PDFDocumentProxy.prototype */ {
    /**
     * @return {number} Total number of pages the PDF contains.
     */
    get numPages() {
      return this.pdfInfo.numPages;
    },
    /**
     * @return {string} A unique ID to identify a PDF. Not guaranteed to be
     * unique.
     */
    get fingerprint() {
      return this.pdfInfo.fingerprint;
    },
    /**
     * @param {number} pageNumber The page number to get. The first page is 1.
     * @return {Promise} A promise that is resolved with a {@link PDFPageProxy}
     * object.
     */
    getPage: function PDFDocumentProxy_getPage(pageNumber) {
      return this.transport.getPage(pageNumber);
    },
    /**
     * @param {{num: number, gen: number}} ref The page reference. Must have
     *   the 'num' and 'gen' properties.
     * @return {Promise} A promise that is resolved with the page index that is
     * associated with the reference.
     */
    getPageIndex: function PDFDocumentProxy_getPageIndex(ref) {
      return this.transport.getPageIndex(ref);
    },
    /**
     * @return {Promise} A promise that is resolved with a lookup table for
     * mapping named destinations to reference numbers.
     *
     * This can be slow for large documents: use getDestination instead
     */
    getDestinations: function PDFDocumentProxy_getDestinations() {
      return this.transport.getDestinations();
    },
    /**
     * @param {string} id The named destination to get.
     * @return {Promise} A promise that is resolved with all information
     * of the given named destination.
     */
    getDestination: function PDFDocumentProxy_getDestination(id) {
      return this.transport.getDestination(id);
    },
    /**
     * @return {Promise} A promise that is resolved with:
     *   an Array containing the pageLabels that correspond to the pageIndexes,
     *   or `null` when no pageLabels are present in the PDF file.
     */
    getPageLabels: function PDFDocumentProxy_getPageLabels() {
      return this.transport.getPageLabels();
    },
    /**
     * @return {Promise} A promise that is resolved with a lookup table for
     * mapping named attachments to their content.
     */
    getAttachments: function PDFDocumentProxy_getAttachments() {
      return this.transport.getAttachments();
    },
    /**
     * @return {Promise} A promise that is resolved with an array of all the
     * JavaScript strings in the name tree.
     */
    getJavaScript: function PDFDocumentProxy_getJavaScript() {
      return this.transport.getJavaScript();
    },
    /**
     * @return {Promise} A promise that is resolved with an {Array} that is a
     * tree outline (if it has one) of the PDF. The tree is in the format of:
     * [
     *  {
     *   title: string,
     *   bold: boolean,
     *   italic: boolean,
     *   color: rgb Uint8Array,
     *   dest: dest obj,
     *   url: string,
     *   items: array of more items like this
     *  },
     *  ...
     * ].
     */
    getOutline: function PDFDocumentProxy_getOutline() {
      return this.transport.getOutline();
    },
    /**
     * @return {Promise} A promise that is resolved with an {Object} that has
     * info and metadata properties.  Info is an {Object} filled with anything
     * available in the information dictionary and similarly metadata is a
     * {Metadata} object with information from the metadata section of the PDF.
     */
    getMetadata: function PDFDocumentProxy_getMetadata() {
      return this.transport.getMetadata();
    },
    /**
     * @return {Promise} A promise that is resolved with a TypedArray that has
     * the raw data from the PDF.
     */
    getData: function PDFDocumentProxy_getData() {
      return this.transport.getData();
    },
    /**
     * @return {Promise} A promise that is resolved when the document's data
     * is loaded. It is resolved with an {Object} that contains the length
     * property that indicates size of the PDF data in bytes.
     */
    getDownloadInfo: function PDFDocumentProxy_getDownloadInfo() {
      return this.transport.downloadInfoCapability.promise;
    },
    /**
     * @return {Promise} A promise this is resolved with current stats about
     * document structures (see {@link PDFDocumentStats}).
     */
    getStats: function PDFDocumentProxy_getStats() {
      return this.transport.getStats();
    },
    /**
     * Cleans up resources allocated by the document, e.g. created @font-face.
     */
    cleanup: function PDFDocumentProxy_cleanup() {
      this.transport.startCleanup();
    },
    /**
     * Destroys current document instance and terminates worker.
     */
    destroy: function PDFDocumentProxy_destroy() {
      return this.loadingTask.destroy();
    }
  };
  return PDFDocumentProxy;
})();

/**
 * Page getTextContent parameters.
 *
 * @typedef {Object} getTextContentParameters
 * @param {boolean} normalizeWhitespace - replaces all occurrences of
 *   whitespace with standard spaces (0x20). The default value is `false`.
 * @param {boolean} disableCombineTextItems - do not attempt to combine
 *   same line {@link TextItem}'s. The default value is `false`.
 */

/**
 * Page text content.
 *
 * @typedef {Object} TextContent
 * @property {array} items - array of {@link TextItem}
 * @property {Object} styles - {@link TextStyles} objects, indexed by font
 *                    name.
 */

/**
 * Page text content part.
 *
 * @typedef {Object} TextItem
 * @property {string} str - text content.
 * @property {string} dir - text direction: 'ttb', 'ltr' or 'rtl'.
 * @property {array} transform - transformation matrix.
 * @property {number} width - width in device space.
 * @property {number} height - height in device space.
 * @property {string} fontName - font name used by pdf.js for converted font.
 */

/**
 * Text style.
 *
 * @typedef {Object} TextStyle
 * @property {number} ascent - font ascent.
 * @property {number} descent - font descent.
 * @property {boolean} vertical - text is in vertical mode.
 * @property {string} fontFamily - possible font family
 */

/**
 * Page annotation parameters.
 *
 * @typedef {Object} GetAnnotationsParameters
 * @param {string} intent - Determines the annotations that will be fetched,
 *                 can be either 'display' (viewable annotations) or 'print'
 *                 (printable annotations).
 *                 If the parameter is omitted, all annotations are fetched.
 */

/**
 * Page render parameters.
 *
 * @typedef {Object} RenderParameters
 * @property {Object} canvasContext - A 2D context of a DOM Canvas object.
 * @property {PageViewport} viewport - Rendering viewport obtained by
 *                                calling of PDFPage.getViewport method.
 * @property {string} intent - Rendering intent, can be 'display' or 'print'
 *                    (default value is 'display').
 * @property {Array}  transform - (optional) Additional transform, applied
 *                    just before viewport transform.
 * @property {Object} imageLayer - (optional) An object that has beginLayout,
 *                    endLayout and appendImage functions.
 * @property {function} continueCallback - (deprecated) A function that will be
 *                      called each time the rendering is paused.  To continue
 *                      rendering call the function that is the first argument
 *                      to the callback.
 */

/**
 * PDF page operator list.
 *
 * @typedef {Object} PDFOperatorList
 * @property {Array} fnArray - Array containing the operator functions.
 * @property {Array} argsArray - Array containing the arguments of the
 *                               functions.
 */

/**
 * Proxy to a PDFPage in the worker thread.
 * @class
 * @alias PDFPageProxy
 */
var PDFPageProxy = (function PDFPageProxyClosure() {
  function PDFPageProxy(pageIndex, pageInfo, transport) {
    this.pageIndex = pageIndex;
    this.pageInfo = pageInfo;
    this.transport = transport;
    this.stats = new StatTimer();
    this.stats.enabled = getDefaultSetting('enableStats');
    this.commonObjs = transport.commonObjs;
    this.objs = new PDFObjects();
    this.cleanupAfterRender = false;
    this.pendingCleanup = false;
    this.intentStates = Object.create(null);
    this.destroyed = false;
  }
  PDFPageProxy.prototype = /** @lends PDFPageProxy.prototype */ {
    /**
     * @return {number} Page number of the page. First page is 1.
     */
    get pageNumber() {
      return this.pageIndex + 1;
    },
    /**
     * @return {number} The number of degrees the page is rotated clockwise.
     */
    get rotate() {
      return this.pageInfo.rotate;
    },
    /**
     * @return {Object} The reference that points to this page. It has 'num' and
     * 'gen' properties.
     */
    get ref() {
      return this.pageInfo.ref;
    },
    /**
     * @return {Array} An array of the visible portion of the PDF page in the
     * user space units - [x1, y1, x2, y2].
     */
    get view() {
      return this.pageInfo.view;
    },
    /**
     * @param {number} scale The desired scale of the viewport.
     * @param {number} rotate Degrees to rotate the viewport. If omitted this
     * defaults to the page rotation.
     * @return {PageViewport} Contains 'width' and 'height' properties
     * along with transforms required for rendering.
     */
    getViewport: function PDFPageProxy_getViewport(scale, rotate) {
      if (arguments.length < 2) {
        rotate = this.rotate;
      }
      return new PageViewport(this.view, scale, rotate, 0, 0);
    },
    /**
     * @param {GetAnnotationsParameters} params - Annotation parameters.
     * @return {Promise} A promise that is resolved with an {Array} of the
     * annotation objects.
     */
    getAnnotations: function PDFPageProxy_getAnnotations(params) {
      var intent = (params && params.intent) || null;

      if (!this.annotationsPromise || this.annotationsIntent !== intent) {
        this.annotationsPromise = this.transport.getAnnotations(this.pageIndex,
                                                                intent);
        this.annotationsIntent = intent;
      }
      return this.annotationsPromise;
    },
    /**
     * Begins the process of rendering a page to the desired context.
     * @param {RenderParameters} params Page render parameters.
     * @return {RenderTask} An object that contains the promise, which
     *                      is resolved when the page finishes rendering.
     */
    render: function PDFPageProxy_render(params) {
      var stats = this.stats;
      stats.time('Overall');

      // If there was a pending destroy cancel it so no cleanup happens during
      // this call to render.
      this.pendingCleanup = false;

      var renderingIntent = (params.intent === 'print' ? 'print' : 'display');

      if (!this.intentStates[renderingIntent]) {
        this.intentStates[renderingIntent] = Object.create(null);
      }
      var intentState = this.intentStates[renderingIntent];

      // If there's no displayReadyCapability yet, then the operatorList
      // was never requested before. Make the request and create the promise.
      if (!intentState.displayReadyCapability) {
        intentState.receivingOperatorList = true;
        intentState.displayReadyCapability = createPromiseCapability();
        intentState.operatorList = {
          fnArray: [],
          argsArray: [],
          lastChunk: false
        };

        this.stats.time('Page Request');
        this.transport.messageHandler.send('RenderPageRequest', {
          pageIndex: this.pageNumber - 1,
          intent: renderingIntent
        });
      }

      var internalRenderTask = new InternalRenderTask(complete, params,
                                                      this.objs,
                                                      this.commonObjs,
                                                      intentState.operatorList,
                                                      this.pageNumber);
      internalRenderTask.useRequestAnimationFrame = renderingIntent !== 'print';
      if (!intentState.renderTasks) {
        intentState.renderTasks = [];
      }
      intentState.renderTasks.push(internalRenderTask);
      var renderTask = internalRenderTask.task;

      // Obsolete parameter support
      if (params.continueCallback) {
        deprecated('render is used with continueCallback parameter');
        renderTask.onContinue = params.continueCallback;
      }

      var self = this;
      intentState.displayReadyCapability.promise.then(
        function pageDisplayReadyPromise(transparency) {
          if (self.pendingCleanup) {
            complete();
            return;
          }
          stats.time('Rendering');
          internalRenderTask.initializeGraphics(transparency);
          internalRenderTask.operatorListChanged();
        },
        function pageDisplayReadPromiseError(reason) {
          complete(reason);
        }
      );

      function complete(error) {
        var i = intentState.renderTasks.indexOf(internalRenderTask);
        if (i >= 0) {
          intentState.renderTasks.splice(i, 1);
        }

        if (self.cleanupAfterRender) {
          self.pendingCleanup = true;
        }
        self._tryCleanup();

        if (error) {
          internalRenderTask.capability.reject(error);
        } else {
          internalRenderTask.capability.resolve();
        }
        stats.timeEnd('Rendering');
        stats.timeEnd('Overall');
      }

      return renderTask;
    },

    /**
     * @return {Promise} A promise resolved with an {@link PDFOperatorList}
     * object that represents page's operator list.
     */
    getOperatorList: function PDFPageProxy_getOperatorList() {
      function operatorListChanged() {
        if (intentState.operatorList.lastChunk) {
          intentState.opListReadCapability.resolve(intentState.operatorList);

          var i = intentState.renderTasks.indexOf(opListTask);
          if (i >= 0) {
            intentState.renderTasks.splice(i, 1);
          }
        }
      }

      var renderingIntent = 'oplist';
      if (!this.intentStates[renderingIntent]) {
        this.intentStates[renderingIntent] = Object.create(null);
      }
      var intentState = this.intentStates[renderingIntent];
      var opListTask;

      if (!intentState.opListReadCapability) {
        opListTask = {};
        opListTask.operatorListChanged = operatorListChanged;
        intentState.receivingOperatorList = true;
        intentState.opListReadCapability = createPromiseCapability();
        intentState.renderTasks = [];
        intentState.renderTasks.push(opListTask);
        intentState.operatorList = {
          fnArray: [],
          argsArray: [],
          lastChunk: false
        };

        this.transport.messageHandler.send('RenderPageRequest', {
          pageIndex: this.pageIndex,
          intent: renderingIntent
        });
      }
      return intentState.opListReadCapability.promise;
    },

    /**
     * @param {getTextContentParameters} params - getTextContent parameters.
     * @return {Promise} That is resolved a {@link TextContent}
     * object that represent the page text content.
     */
    getTextContent: function PDFPageProxy_getTextContent(params) {
      return this.transport.messageHandler.sendWithPromise('GetTextContent', {
        pageIndex: this.pageNumber - 1,
        normalizeWhitespace: (params && params.normalizeWhitespace === true ?
                              true : /* Default */ false),
        combineTextItems: (params && params.disableCombineTextItems === true ?
                           false : /* Default */ true),
      });
    },

    /**
     * Destroys page object.
     */
    _destroy: function PDFPageProxy_destroy() {
      this.destroyed = true;
      this.transport.pageCache[this.pageIndex] = null;

      var waitOn = [];
      Object.keys(this.intentStates).forEach(function(intent) {
        if (intent === 'oplist') {
          // Avoid errors below, since the renderTasks are just stubs.
          return;
        }
        var intentState = this.intentStates[intent];
        intentState.renderTasks.forEach(function(renderTask) {
          var renderCompleted = renderTask.capability.promise.
            catch(function () {}); // ignoring failures
          waitOn.push(renderCompleted);
          renderTask.cancel();
        });
      }, this);
      this.objs.clear();
      this.annotationsPromise = null;
      this.pendingCleanup = false;
      return Promise.all(waitOn);
    },

    /**
     * Cleans up resources allocated by the page. (deprecated)
     */
    destroy: function() {
      deprecated('page destroy method, use cleanup() instead');
      this.cleanup();
    },

    /**
     * Cleans up resources allocated by the page.
     */
    cleanup: function PDFPageProxy_cleanup() {
      this.pendingCleanup = true;
      this._tryCleanup();
    },
    /**
     * For internal use only. Attempts to clean up if rendering is in a state
     * where that's possible.
     * @ignore
     */
    _tryCleanup: function PDFPageProxy_tryCleanup() {
      if (!this.pendingCleanup ||
          Object.keys(this.intentStates).some(function(intent) {
            var intentState = this.intentStates[intent];
            return (intentState.renderTasks.length !== 0 ||
                    intentState.receivingOperatorList);
          }, this)) {
        return;
      }

      Object.keys(this.intentStates).forEach(function(intent) {
        delete this.intentStates[intent];
      }, this);
      this.objs.clear();
      this.annotationsPromise = null;
      this.pendingCleanup = false;
    },
    /**
     * For internal use only.
     * @ignore
     */
    _startRenderPage: function PDFPageProxy_startRenderPage(transparency,
                                                            intent) {
      var intentState = this.intentStates[intent];
      // TODO Refactor RenderPageRequest to separate rendering
      // and operator list logic
      if (intentState.displayReadyCapability) {
        intentState.displayReadyCapability.resolve(transparency);
      }
    },
    /**
     * For internal use only.
     * @ignore
     */
    _renderPageChunk: function PDFPageProxy_renderPageChunk(operatorListChunk,
                                                            intent) {
      var intentState = this.intentStates[intent];
      var i, ii;
      // Add the new chunk to the current operator list.
      for (i = 0, ii = operatorListChunk.length; i < ii; i++) {
        intentState.operatorList.fnArray.push(operatorListChunk.fnArray[i]);
        intentState.operatorList.argsArray.push(
          operatorListChunk.argsArray[i]);
      }
      intentState.operatorList.lastChunk = operatorListChunk.lastChunk;

      // Notify all the rendering tasks there are more operators to be consumed.
      for (i = 0; i < intentState.renderTasks.length; i++) {
        intentState.renderTasks[i].operatorListChanged();
      }

      if (operatorListChunk.lastChunk) {
        intentState.receivingOperatorList = false;
        this._tryCleanup();
      }
    }
  };
  return PDFPageProxy;
})();

/**
 * PDF.js web worker abstraction, it controls instantiation of PDF documents and
 * WorkerTransport for them.  If creation of a web worker is not possible,
 * a "fake" worker will be used instead.
 * @class
 */
var PDFWorker = (function PDFWorkerClosure() {
  var nextFakeWorkerId = 0;

  function getWorkerSrc() {
    if (typeof workerSrc !== 'undefined') {
      return workerSrc;
    }
    if (getDefaultSetting('workerSrc')) {
      return getDefaultSetting('workerSrc');
    }
    if (pdfjsFilePath) {
      return pdfjsFilePath.replace(/\.js$/i, '.worker.js');
    }
    error('No PDFJS.workerSrc specified');
  }

  var fakeWorkerFilesLoadedCapability;

  // Loads worker code into main thread.
  function setupFakeWorkerGlobal() {
    var WorkerMessageHandler;
    if (!fakeWorkerFilesLoadedCapability) {
      fakeWorkerFilesLoadedCapability = createPromiseCapability();
      // In the developer build load worker_loader which in turn loads all the
      // other files and resolves the promise. In production only the
      // pdf.worker.js file is needed.
      var loader = fakeWorkerFilesLoader || function (callback) {
        Util.loadScript(getWorkerSrc(), function () {
          callback(window.pdfjsDistBuildPdfWorker.WorkerMessageHandler);
        });
      };
      loader(fakeWorkerFilesLoadedCapability.resolve);
    }
    return fakeWorkerFilesLoadedCapability.promise;
  }

  function createCDNWrapper(url) {
    // We will rely on blob URL's property to specify origin.
    // We want this function to fail in case if createObjectURL or Blob do not
    // exist or fail for some reason -- our Worker creation will fail anyway.
    var wrapper = 'importScripts(\'' + url + '\');';
    return URL.createObjectURL(new Blob([wrapper]));
  }

  function PDFWorker(name) {
    this.name = name;
    this.destroyed = false;

    this._readyCapability = createPromiseCapability();
    this._port = null;
    this._webWorker = null;
    this._messageHandler = null;
    this._initialize();
  }

  PDFWorker.prototype =  /** @lends PDFWorker.prototype */ {
    get promise() {
      return this._readyCapability.promise;
    },

    get port() {
      return this._port;
    },

    get messageHandler() {
      return this._messageHandler;
    },

    _initialize: function PDFWorker_initialize() {
      // If worker support isn't disabled explicit and the browser has worker
      // support, create a new web worker and test if it/the browser fulfills
      // all requirements to run parts of pdf.js in a web worker.
      // Right now, the requirement is, that an Uint8Array is still an
      // Uint8Array as it arrives on the worker. (Chrome added this with v.15.)
      if (!isWorkerDisabled && !getDefaultSetting('disableWorker') &&
          typeof Worker !== 'undefined') {
        var workerSrc = getWorkerSrc();

        try {
          // Wraps workerSrc path into blob URL, if the former does not belong
          // to the same origin.
          if (!isSameOrigin(window.location.href, workerSrc)) {
            workerSrc = createCDNWrapper(
              new URL(workerSrc, window.location).href);
          }
          // Some versions of FF can't create a worker on localhost, see:
          // https://bugzilla.mozilla.org/show_bug.cgi?id=683280
          var worker = new Worker(workerSrc);
          var messageHandler = new MessageHandler('main', 'worker', worker);
          var terminateEarly = function() {
            worker.removeEventListener('error', onWorkerError);
            messageHandler.destroy();
            worker.terminate();
            if (this.destroyed) {
              this._readyCapability.reject(new Error('Worker was destroyed'));
            } else {
              // Fall back to fake worker if the termination is caused by an
              // error (e.g. NetworkError / SecurityError).
              this._setupFakeWorker();
            }
          }.bind(this);

          var onWorkerError = function(event) {
            if (!this._webWorker) {
              // Worker failed to initialize due to an error. Clean up and fall
              // back to the fake worker.
              terminateEarly();
            }
          }.bind(this);
          worker.addEventListener('error', onWorkerError);

          messageHandler.on('test', function PDFWorker_test(data) {
            worker.removeEventListener('error', onWorkerError);
            if (this.destroyed) {
              terminateEarly();
              return; // worker was destroyed
            }
            var supportTypedArray = data && data.supportTypedArray;
            if (supportTypedArray) {
              this._messageHandler = messageHandler;
              this._port = worker;
              this._webWorker = worker;
              if (!data.supportTransfers) {
                isPostMessageTransfersDisabled = true;
              }
              this._readyCapability.resolve();
              // Send global setting, e.g. verbosity level.
              messageHandler.send('configure', {
                verbosity: getVerbosityLevel()
              });
            } else {
              this._setupFakeWorker();
              messageHandler.destroy();
              worker.terminate();
            }
          }.bind(this));

          messageHandler.on('console_log', function (data) {
            console.log.apply(console, data);
          });
          messageHandler.on('console_error', function (data) {
            console.error.apply(console, data);
          });

          messageHandler.on('ready', function (data) {
            worker.removeEventListener('error', onWorkerError);
            if (this.destroyed) {
              terminateEarly();
              return; // worker was destroyed
            }
            try {
              sendTest();
            } catch (e)  {
              // We need fallback to a faked worker.
              this._setupFakeWorker();
            }
          }.bind(this));

          var sendTest = function () {
            var postMessageTransfers =
              getDefaultSetting('postMessageTransfers') &&
              !isPostMessageTransfersDisabled;
            var testObj = new Uint8Array([postMessageTransfers ? 255 : 0]);
            // Some versions of Opera throw a DATA_CLONE_ERR on serializing the
            // typed array. Also, checking if we can use transfers.
            try {
              messageHandler.send('test', testObj, [testObj.buffer]);
            } catch (ex) {
              info('Cannot use postMessage transfers');
              testObj[0] = 0;
              messageHandler.send('test', testObj);
            }
          };

          // It might take time for worker to initialize (especially when AMD
          // loader is used). We will try to send test immediately, and then
          // when 'ready' message will arrive. The worker shall process only
          // first received 'test'.
          sendTest();
          return;
        } catch (e) {
          info('The worker has been disabled.');
        }
      }
      // Either workers are disabled, not supported or have thrown an exception.
      // Thus, we fallback to a faked worker.
      this._setupFakeWorker();
    },

    _setupFakeWorker: function PDFWorker_setupFakeWorker() {
      if (!isWorkerDisabled && !getDefaultSetting('disableWorker')) {
        warn('Setting up fake worker.');
        isWorkerDisabled = true;
      }

      setupFakeWorkerGlobal().then(function (WorkerMessageHandler) {
        if (this.destroyed) {
          this._readyCapability.reject(new Error('Worker was destroyed'));
          return;
        }

        // If we don't use a worker, just post/sendMessage to the main thread.
        var port = {
          _listeners: [],
          postMessage: function (obj) {
            var e = {data: obj};
            this._listeners.forEach(function (listener) {
              listener.call(this, e);
            }, this);
          },
          addEventListener: function (name, listener) {
            this._listeners.push(listener);
          },
          removeEventListener: function (name, listener) {
            var i = this._listeners.indexOf(listener);
            this._listeners.splice(i, 1);
          },
          terminate: function () {}
        };
        this._port = port;

        // All fake workers use the same port, making id unique.
        var id = 'fake' + (nextFakeWorkerId++);

        // If the main thread is our worker, setup the handling for the
        // messages -- the main thread sends to it self.
        var workerHandler = new MessageHandler(id + '_worker', id, port);
        WorkerMessageHandler.setup(workerHandler, port);

        var messageHandler = new MessageHandler(id, id + '_worker', port);
        this._messageHandler = messageHandler;
        this._readyCapability.resolve();
      }.bind(this));
    },

    /**
     * Destroys the worker instance.
     */
    destroy: function PDFWorker_destroy() {
      this.destroyed = true;
      if (this._webWorker) {
        // We need to terminate only web worker created resource.
        this._webWorker.terminate();
        this._webWorker = null;
      }
      this._port = null;
      if (this._messageHandler) {
        this._messageHandler.destroy();
        this._messageHandler = null;
      }
    }
  };

  return PDFWorker;
})();

/**
 * For internal use only.
 * @ignore
 */
var WorkerTransport = (function WorkerTransportClosure() {
  function WorkerTransport(messageHandler, loadingTask, pdfDataRangeTransport) {
    this.messageHandler = messageHandler;
    this.loadingTask = loadingTask;
    this.pdfDataRangeTransport = pdfDataRangeTransport;
    this.commonObjs = new PDFObjects();
    this.fontLoader = new FontLoader(loadingTask.docId);

    this.destroyed = false;
    this.destroyCapability = null;

    this.pageCache = [];
    this.pagePromises = [];
    this.downloadInfoCapability = createPromiseCapability();

    this.setupMessageHandler();
  }
  WorkerTransport.prototype = {
    destroy: function WorkerTransport_destroy() {
      if (this.destroyCapability) {
        return this.destroyCapability.promise;
      }

      this.destroyed = true;
      this.destroyCapability = createPromiseCapability();

      var waitOn = [];
      // We need to wait for all renderings to be completed, e.g.
      // timeout/rAF can take a long time.
      this.pageCache.forEach(function (page) {
        if (page) {
          waitOn.push(page._destroy());
        }
      });
      this.pageCache = [];
      this.pagePromises = [];
      var self = this;
      // We also need to wait for the worker to finish its long running tasks.
      var terminated = this.messageHandler.sendWithPromise('Terminate', null);
      waitOn.push(terminated);
      Promise.all(waitOn).then(function () {
        self.fontLoader.clear();
        if (self.pdfDataRangeTransport) {
          self.pdfDataRangeTransport.abort();
          self.pdfDataRangeTransport = null;
        }
        if (self.messageHandler) {
          self.messageHandler.destroy();
          self.messageHandler = null;
        }
        self.destroyCapability.resolve();
      }, this.destroyCapability.reject);
      return this.destroyCapability.promise;
    },

    setupMessageHandler:
      function WorkerTransport_setupMessageHandler() {
      var messageHandler = this.messageHandler;

      function updatePassword(password) {
        messageHandler.send('UpdatePassword', password);
      }

      var pdfDataRangeTransport = this.pdfDataRangeTransport;
      if (pdfDataRangeTransport) {
        pdfDataRangeTransport.addRangeListener(function(begin, chunk) {
          messageHandler.send('OnDataRange', {
            begin: begin,
            chunk: chunk
          });
        });

        pdfDataRangeTransport.addProgressListener(function(loaded) {
          messageHandler.send('OnDataProgress', {
            loaded: loaded
          });
        });

        pdfDataRangeTransport.addProgressiveReadListener(function(chunk) {
          messageHandler.send('OnDataRange', {
            chunk: chunk
          });
        });

        messageHandler.on('RequestDataRange',
          function transportDataRange(data) {
            pdfDataRangeTransport.requestDataRange(data.begin, data.end);
          }, this);
      }

      messageHandler.on('GetDoc', function transportDoc(data) {
        var pdfInfo = data.pdfInfo;
        this.numPages = data.pdfInfo.numPages;
        var loadingTask = this.loadingTask;
        var pdfDocument = new PDFDocumentProxy(pdfInfo, this, loadingTask);
        this.pdfDocument = pdfDocument;
        loadingTask._capability.resolve(pdfDocument);
      }, this);

      messageHandler.on('NeedPassword',
                        function transportNeedPassword(exception) {
        var loadingTask = this.loadingTask;
        if (loadingTask.onPassword) {
          return loadingTask.onPassword(updatePassword,
                                        PasswordResponses.NEED_PASSWORD);
        }
        loadingTask._capability.reject(
          new PasswordException(exception.message, exception.code));
      }, this);

      messageHandler.on('IncorrectPassword',
                        function transportIncorrectPassword(exception) {
        var loadingTask = this.loadingTask;
        if (loadingTask.onPassword) {
          return loadingTask.onPassword(updatePassword,
                                        PasswordResponses.INCORRECT_PASSWORD);
        }
        loadingTask._capability.reject(
          new PasswordException(exception.message, exception.code));
      }, this);

      messageHandler.on('InvalidPDF', function transportInvalidPDF(exception) {
        this.loadingTask._capability.reject(
          new InvalidPDFException(exception.message));
      }, this);

      messageHandler.on('MissingPDF', function transportMissingPDF(exception) {
        this.loadingTask._capability.reject(
          new MissingPDFException(exception.message));
      }, this);

      messageHandler.on('UnexpectedResponse',
                        function transportUnexpectedResponse(exception) {
        this.loadingTask._capability.reject(
          new UnexpectedResponseException(exception.message, exception.status));
      }, this);

      messageHandler.on('UnknownError',
                        function transportUnknownError(exception) {
        this.loadingTask._capability.reject(
          new UnknownErrorException(exception.message, exception.details));
      }, this);

      messageHandler.on('DataLoaded', function transportPage(data) {
        this.downloadInfoCapability.resolve(data);
      }, this);

      messageHandler.on('PDFManagerReady', function transportPage(data) {
        if (this.pdfDataRangeTransport) {
          this.pdfDataRangeTransport.transportReady();
        }
      }, this);

      messageHandler.on('StartRenderPage', function transportRender(data) {
        if (this.destroyed) {
          return; // Ignore any pending requests if the worker was terminated.
        }
        var page = this.pageCache[data.pageIndex];

        page.stats.timeEnd('Page Request');
        page._startRenderPage(data.transparency, data.intent);
      }, this);

      messageHandler.on('RenderPageChunk', function transportRender(data) {
        if (this.destroyed) {
          return; // Ignore any pending requests if the worker was terminated.
        }
        var page = this.pageCache[data.pageIndex];

        page._renderPageChunk(data.operatorList, data.intent);
      }, this);

      messageHandler.on('commonobj', function transportObj(data) {
        if (this.destroyed) {
          return; // Ignore any pending requests if the worker was terminated.
        }

        var id = data[0];
        var type = data[1];
        if (this.commonObjs.hasData(id)) {
          return;
        }

        switch (type) {
          case 'Font':
            var exportedData = data[2];

            if ('error' in exportedData) {
              var exportedError = exportedData.error;
              warn('Error during font loading: ' + exportedError);
              this.commonObjs.resolve(id, exportedError);
              break;
            }
            var fontRegistry = null;
            if (getDefaultSetting('pdfBug') && globalScope.FontInspector &&
                globalScope['FontInspector'].enabled) {
              fontRegistry = {
                registerFont: function (font, url) {
                  globalScope['FontInspector'].fontAdded(font, url);
                }
              };
            }
            var font = new FontFaceObject(exportedData, {
              isEvalSuported: getDefaultSetting('isEvalSupported'),
              disableFontFace: getDefaultSetting('disableFontFace'),
              fontRegistry: fontRegistry
            });

            this.fontLoader.bind(
              [font],
              function fontReady(fontObjs) {
                this.commonObjs.resolve(id, font);
              }.bind(this)
            );
            break;
          case 'FontPath':
            this.commonObjs.resolve(id, data[2]);
            break;
          default:
            error('Got unknown common object type ' + type);
        }
      }, this);

      messageHandler.on('obj', function transportObj(data) {
        if (this.destroyed) {
          return; // Ignore any pending requests if the worker was terminated.
        }

        var id = data[0];
        var pageIndex = data[1];
        var type = data[2];
        var pageProxy = this.pageCache[pageIndex];
        var imageData;
        if (pageProxy.objs.hasData(id)) {
          return;
        }

        switch (type) {
          case 'JpegStream':
            imageData = data[3];
            loadJpegStream(id, imageData, pageProxy.objs);
            break;
          case 'Image':
            imageData = data[3];
            pageProxy.objs.resolve(id, imageData);

            // heuristics that will allow not to store large data
            var MAX_IMAGE_SIZE_TO_STORE = 8000000;
            if (imageData && 'data' in imageData &&
                imageData.data.length > MAX_IMAGE_SIZE_TO_STORE) {
              pageProxy.cleanupAfterRender = true;
            }
            break;
          default:
            error('Got unknown object type ' + type);
        }
      }, this);

      messageHandler.on('DocProgress', function transportDocProgress(data) {
        if (this.destroyed) {
          return; // Ignore any pending requests if the worker was terminated.
        }

        var loadingTask = this.loadingTask;
        if (loadingTask.onProgress) {
          loadingTask.onProgress({
            loaded: data.loaded,
            total: data.total
          });
        }
      }, this);

      messageHandler.on('PageError', function transportError(data) {
        if (this.destroyed) {
          return; // Ignore any pending requests if the worker was terminated.
        }

        var page = this.pageCache[data.pageNum - 1];
        var intentState = page.intentStates[data.intent];

        if (intentState.displayReadyCapability) {
          intentState.displayReadyCapability.reject(data.error);
        } else {
          error(data.error);
        }

        if (intentState.operatorList) {
          // Mark operator list as complete.
          intentState.operatorList.lastChunk = true;
          for (var i = 0; i < intentState.renderTasks.length; i++) {
            intentState.renderTasks[i].operatorListChanged();
          }
        }
      }, this);

      messageHandler.on('UnsupportedFeature',
          function transportUnsupportedFeature(data) {
        if (this.destroyed) {
          return; // Ignore any pending requests if the worker was terminated.
        }
        var featureId = data.featureId;
        var loadingTask = this.loadingTask;
        if (loadingTask.onUnsupportedFeature) {
          loadingTask.onUnsupportedFeature(featureId);
        }
        _UnsupportedManager.notify(featureId);
      }, this);

      messageHandler.on('JpegDecode', function(data) {
        if (this.destroyed) {
          return Promise.reject('Worker was terminated');
        }

        var imageUrl = data[0];
        var components = data[1];
        if (components !== 3 && components !== 1) {
          return Promise.reject(
            new Error('Only 3 components or 1 component can be returned'));
        }

        return new Promise(function (resolve, reject) {
          var img = new Image();
          img.onload = function () {
            var width = img.width;
            var height = img.height;
            var size = width * height;
            var rgbaLength = size * 4;
            var buf = new Uint8Array(size * components);
            var tmpCanvas = createScratchCanvas(width, height);
            var tmpCtx = tmpCanvas.getContext('2d');
            tmpCtx.drawImage(img, 0, 0);
            var data = tmpCtx.getImageData(0, 0, width, height).data;
            var i, j;

            if (components === 3) {
              for (i = 0, j = 0; i < rgbaLength; i += 4, j += 3) {
                buf[j] = data[i];
                buf[j + 1] = data[i + 1];
                buf[j + 2] = data[i + 2];
              }
            } else if (components === 1) {
              for (i = 0, j = 0; i < rgbaLength; i += 4, j++) {
                buf[j] = data[i];
              }
            }
            resolve({ data: buf, width: width, height: height});
          };
          img.onerror = function () {
            reject(new Error('JpegDecode failed to load image'));
          };
          img.src = imageUrl;
        });
      }, this);
    },

    getData: function WorkerTransport_getData() {
      return this.messageHandler.sendWithPromise('GetData', null);
    },

    getPage: function WorkerTransport_getPage(pageNumber, capability) {
      if (pageNumber <= 0 || pageNumber > this.numPages ||
          (pageNumber|0) !== pageNumber) {
        return Promise.reject(new Error('Invalid page request'));
      }

      var pageIndex = pageNumber - 1;
      if (pageIndex in this.pagePromises) {
        return this.pagePromises[pageIndex];
      }
      var promise = this.messageHandler.sendWithPromise('GetPage', {
        pageIndex: pageIndex
      }).then(function (pageInfo) {
        if (this.destroyed) {
          throw new Error('Transport destroyed');
        }
        var page = new PDFPageProxy(pageIndex, pageInfo, this);
        this.pageCache[pageIndex] = page;
        return page;
      }.bind(this));
      this.pagePromises[pageIndex] = promise;
      return promise;
    },

    getPageIndex: function WorkerTransport_getPageIndexByRef(ref) {
      return this.messageHandler.sendWithPromise('GetPageIndex', { ref: ref }).
        then(function (pageIndex) {
          return pageIndex;
        }, function (reason) {
          return Promise.reject(new Error(reason));
        });
    },

    getAnnotations: function WorkerTransport_getAnnotations(pageIndex, intent) {
      return this.messageHandler.sendWithPromise('GetAnnotations', {
        pageIndex: pageIndex,
        intent: intent,
      });
    },

    getDestinations: function WorkerTransport_getDestinations() {
      return this.messageHandler.sendWithPromise('GetDestinations', null);
    },

    getDestination: function WorkerTransport_getDestination(id) {
      return this.messageHandler.sendWithPromise('GetDestination', { id: id });
    },

    getPageLabels: function WorkerTransport_getPageLabels() {
      return this.messageHandler.sendWithPromise('GetPageLabels', null);
    },

    getAttachments: function WorkerTransport_getAttachments() {
      return this.messageHandler.sendWithPromise('GetAttachments', null);
    },

    getJavaScript: function WorkerTransport_getJavaScript() {
      return this.messageHandler.sendWithPromise('GetJavaScript', null);
    },

    getOutline: function WorkerTransport_getOutline() {
      return this.messageHandler.sendWithPromise('GetOutline', null);
    },

    getMetadata: function WorkerTransport_getMetadata() {
      return this.messageHandler.sendWithPromise('GetMetadata', null).
        then(function transportMetadata(results) {
        return {
          info: results[0],
          metadata: (results[1] ? new Metadata(results[1]) : null)
        };
      });
    },

    getStats: function WorkerTransport_getStats() {
      return this.messageHandler.sendWithPromise('GetStats', null);
    },

    startCleanup: function WorkerTransport_startCleanup() {
      this.messageHandler.sendWithPromise('Cleanup', null).
        then(function endCleanup() {
        for (var i = 0, ii = this.pageCache.length; i < ii; i++) {
          var page = this.pageCache[i];
          if (page) {
            page.cleanup();
          }
        }
        this.commonObjs.clear();
        this.fontLoader.clear();
      }.bind(this));
    }
  };
  return WorkerTransport;

})();

/**
 * A PDF document and page is built of many objects. E.g. there are objects
 * for fonts, images, rendering code and such. These objects might get processed
 * inside of a worker. The `PDFObjects` implements some basic functions to
 * manage these objects.
 * @ignore
 */
var PDFObjects = (function PDFObjectsClosure() {
  function PDFObjects() {
    this.objs = Object.create(null);
  }

  PDFObjects.prototype = {
    /**
     * Internal function.
     * Ensures there is an object defined for `objId`.
     */
    ensureObj: function PDFObjects_ensureObj(objId) {
      if (this.objs[objId]) {
        return this.objs[objId];
      }

      var obj = {
        capability: createPromiseCapability(),
        data: null,
        resolved: false
      };
      this.objs[objId] = obj;

      return obj;
    },

    /**
     * If called *without* callback, this returns the data of `objId` but the
     * object needs to be resolved. If it isn't, this function throws.
     *
     * If called *with* a callback, the callback is called with the data of the
     * object once the object is resolved. That means, if you call this
     * function and the object is already resolved, the callback gets called
     * right away.
     */
    get: function PDFObjects_get(objId, callback) {
      // If there is a callback, then the get can be async and the object is
      // not required to be resolved right now
      if (callback) {
        this.ensureObj(objId).capability.promise.then(callback);
        return null;
      }

      // If there isn't a callback, the user expects to get the resolved data
      // directly.
      var obj = this.objs[objId];

      // If there isn't an object yet or the object isn't resolved, then the
      // data isn't ready yet!
      if (!obj || !obj.resolved) {
        error('Requesting object that isn\'t resolved yet ' + objId);
      }

      return obj.data;
    },

    /**
     * Resolves the object `objId` with optional `data`.
     */
    resolve: function PDFObjects_resolve(objId, data) {
      var obj = this.ensureObj(objId);

      obj.resolved = true;
      obj.data = data;
      obj.capability.resolve(data);
    },

    isResolved: function PDFObjects_isResolved(objId) {
      var objs = this.objs;

      if (!objs[objId]) {
        return false;
      } else {
        return objs[objId].resolved;
      }
    },

    hasData: function PDFObjects_hasData(objId) {
      return this.isResolved(objId);
    },

    /**
     * Returns the data of `objId` if object exists, null otherwise.
     */
    getData: function PDFObjects_getData(objId) {
      var objs = this.objs;
      if (!objs[objId] || !objs[objId].resolved) {
        return null;
      } else {
        return objs[objId].data;
      }
    },

    clear: function PDFObjects_clear() {
      this.objs = Object.create(null);
    }
  };
  return PDFObjects;
})();

/**
 * Allows controlling of the rendering tasks.
 * @class
 * @alias RenderTask
 */
var RenderTask = (function RenderTaskClosure() {
  function RenderTask(internalRenderTask) {
    this._internalRenderTask = internalRenderTask;

    /**
     * Callback for incremental rendering -- a function that will be called
     * each time the rendering is paused.  To continue rendering call the
     * function that is the first argument to the callback.
     * @type {function}
     */
    this.onContinue = null;
  }

  RenderTask.prototype = /** @lends RenderTask.prototype */ {
    /**
     * Promise for rendering task completion.
     * @return {Promise}
     */
    get promise() {
      return this._internalRenderTask.capability.promise;
    },

    /**
     * Cancels the rendering task. If the task is currently rendering it will
     * not be cancelled until graphics pauses with a timeout. The promise that
     * this object extends will resolved when cancelled.
     */
    cancel: function RenderTask_cancel() {
      this._internalRenderTask.cancel();
    },

    /**
     * Registers callbacks to indicate the rendering task completion.
     *
     * @param {function} onFulfilled The callback for the rendering completion.
     * @param {function} onRejected The callback for the rendering failure.
     * @return {Promise} A promise that is resolved after the onFulfilled or
     *                   onRejected callback.
     */
    then: function RenderTask_then(onFulfilled, onRejected) {
      return this.promise.then.apply(this.promise, arguments);
    }
  };

  return RenderTask;
})();

/**
 * For internal use only.
 * @ignore
 */
var InternalRenderTask = (function InternalRenderTaskClosure() {

  function InternalRenderTask(callback, params, objs, commonObjs, operatorList,
                              pageNumber) {
    this.callback = callback;
    this.params = params;
    this.objs = objs;
    this.commonObjs = commonObjs;
    this.operatorListIdx = null;
    this.operatorList = operatorList;
    this.pageNumber = pageNumber;
    this.running = false;
    this.graphicsReadyCallback = null;
    this.graphicsReady = false;
    this.useRequestAnimationFrame = false;
    this.cancelled = false;
    this.capability = createPromiseCapability();
    this.task = new RenderTask(this);
    // caching this-bound methods
    this._continueBound = this._continue.bind(this);
    this._scheduleNextBound = this._scheduleNext.bind(this);
    this._nextBound = this._next.bind(this);
  }

  InternalRenderTask.prototype = {

    initializeGraphics:
        function InternalRenderTask_initializeGraphics(transparency) {

      if (this.cancelled) {
        return;
      }
      if (getDefaultSetting('pdfBug') && globalScope.StepperManager &&
          globalScope.StepperManager.enabled) {
        this.stepper = globalScope.StepperManager.create(this.pageNumber - 1);
        this.stepper.init(this.operatorList);
        this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
      }

      var params = this.params;
      this.gfx = new CanvasGraphics(params.canvasContext, this.commonObjs,
                                    this.objs, params.imageLayer);

      this.gfx.beginDrawing(params.transform, params.viewport, transparency);
      this.operatorListIdx = 0;
      this.graphicsReady = true;
      if (this.graphicsReadyCallback) {
        this.graphicsReadyCallback();
      }
    },

    cancel: function InternalRenderTask_cancel() {
      this.running = false;
      this.cancelled = true;
      this.callback('cancelled');
    },

    operatorListChanged: function InternalRenderTask_operatorListChanged() {
      if (!this.graphicsReady) {
        if (!this.graphicsReadyCallback) {
          this.graphicsReadyCallback = this._continueBound;
        }
        return;
      }

      if (this.stepper) {
        this.stepper.updateOperatorList(this.operatorList);
      }

      if (this.running) {
        return;
      }
      this._continue();
    },

    _continue: function InternalRenderTask__continue() {
      this.running = true;
      if (this.cancelled) {
        return;
      }
      if (this.task.onContinue) {
        this.task.onContinue.call(this.task, this._scheduleNextBound);
      } else {
        this._scheduleNext();
      }
    },

    _scheduleNext: function InternalRenderTask__scheduleNext() {
      if (this.useRequestAnimationFrame && typeof window !== 'undefined') {
        window.requestAnimationFrame(this._nextBound);
      } else {
        Promise.resolve(undefined).then(this._nextBound);
      }
    },

    _next: function InternalRenderTask__next() {
      if (this.cancelled) {
        return;
      }
      this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList,
                                        this.operatorListIdx,
                                        this._continueBound,
                                        this.stepper);
      if (this.operatorListIdx === this.operatorList.argsArray.length) {
        this.running = false;
        if (this.operatorList.lastChunk) {
          this.gfx.endDrawing();
          this.callback();
        }
      }
    }

  };

  return InternalRenderTask;
})();

/**
 * (Deprecated) Global observer of unsupported feature usages. Use
 * onUnsupportedFeature callback of the {PDFDocumentLoadingTask} instance.
 */
var _UnsupportedManager = (function UnsupportedManagerClosure() {
  var listeners = [];
  return {
    listen: function (cb) {
      deprecated('Global UnsupportedManager.listen is used: ' +
                 ' use PDFDocumentLoadingTask.onUnsupportedFeature instead');
      listeners.push(cb);
    },
    notify: function (featureId) {
      for (var i = 0, ii = listeners.length; i < ii; i++) {
        listeners[i](featureId);
      }
    }
  };
})();

if (typeof pdfjsVersion !== 'undefined') {
  exports.version = pdfjsVersion;
}
if (typeof pdfjsBuild !== 'undefined') {
  exports.build = pdfjsBuild;
}

exports.getDocument = getDocument;
exports.PDFDataRangeTransport = PDFDataRangeTransport;
exports.PDFWorker = PDFWorker;
exports.PDFDocumentProxy = PDFDocumentProxy;
exports.PDFPageProxy = PDFPageProxy;
exports._UnsupportedManager = _UnsupportedManager;
}));


(function (root, factory) {
  {
    factory((root.pdfjsDisplayGlobal = {}), root.pdfjsSharedUtil,
      root.pdfjsDisplayDOMUtils, root.pdfjsDisplayAPI,
      root.pdfjsDisplayAnnotationLayer, root.pdfjsDisplayTextLayer,
      root.pdfjsDisplayMetadata, root.pdfjsDisplaySVG);
  }
}(this, function (exports, sharedUtil, displayDOMUtils, displayAPI,
                  displayAnnotationLayer, displayTextLayer, displayMetadata,
                  displaySVG) {

  var globalScope = sharedUtil.globalScope;
  var deprecated = sharedUtil.deprecated;
  var warn = sharedUtil.warn;
  var LinkTarget = displayDOMUtils.LinkTarget;

  var isWorker = (typeof window === 'undefined');

  // The global PDFJS object is now deprecated and will not be supported in
  // the future. The members below are maintained for backward  compatibility
  // and shall not be extended or modified. If the global.js is included as
  // a module, we will create a global PDFJS object instance or use existing.
  if (!globalScope.PDFJS) {
    globalScope.PDFJS = {};
  }
  var PDFJS = globalScope.PDFJS;

  if (typeof pdfjsVersion !== 'undefined') {
    PDFJS.version = pdfjsVersion;
  }
  if (typeof pdfjsBuild !== 'undefined') {
    PDFJS.build = pdfjsBuild;
  }

  PDFJS.pdfBug = false;

  if (PDFJS.verbosity !== undefined) {
    sharedUtil.setVerbosityLevel(PDFJS.verbosity);
  }
  delete PDFJS.verbosity;
  Object.defineProperty(PDFJS, 'verbosity', {
    get: function () { return sharedUtil.getVerbosityLevel(); },
    set: function (level) { sharedUtil.setVerbosityLevel(level); },
    enumerable: true,
    configurable: true
  });

  PDFJS.VERBOSITY_LEVELS = sharedUtil.VERBOSITY_LEVELS;
  PDFJS.OPS = sharedUtil.OPS;
  PDFJS.UNSUPPORTED_FEATURES = sharedUtil.UNSUPPORTED_FEATURES;
  PDFJS.isValidUrl = sharedUtil.isValidUrl;
  PDFJS.shadow = sharedUtil.shadow;
  PDFJS.createBlob = sharedUtil.createBlob;
  PDFJS.createObjectURL = function PDFJS_createObjectURL(data, contentType) {
    return sharedUtil.createObjectURL(data, contentType,
                                      PDFJS.disableCreateObjectURL);
  };
  Object.defineProperty(PDFJS, 'isLittleEndian', {
    configurable: true,
    get: function PDFJS_isLittleEndian() {
      var value = sharedUtil.isLittleEndian();
      return sharedUtil.shadow(PDFJS, 'isLittleEndian', value);
    }
  });
  PDFJS.removeNullCharacters = sharedUtil.removeNullCharacters;
  PDFJS.PasswordResponses = sharedUtil.PasswordResponses;
  PDFJS.PasswordException = sharedUtil.PasswordException;
  PDFJS.UnknownErrorException = sharedUtil.UnknownErrorException;
  PDFJS.InvalidPDFException = sharedUtil.InvalidPDFException;
  PDFJS.MissingPDFException = sharedUtil.MissingPDFException;
  PDFJS.UnexpectedResponseException = sharedUtil.UnexpectedResponseException;
  PDFJS.Util = sharedUtil.Util;
  PDFJS.PageViewport = sharedUtil.PageViewport;
  PDFJS.createPromiseCapability = sharedUtil.createPromiseCapability;

  /**
   * The maximum allowed image size in total pixels e.g. width * height. Images
   * above this value will not be drawn. Use -1 for no limit.
   * @var {number}
   */
  PDFJS.maxImageSize = (PDFJS.maxImageSize === undefined ?
                        -1 : PDFJS.maxImageSize);

  /**
   * The url of where the predefined Adobe CMaps are located. Include trailing
   * slash.
   * @var {string}
   */
  PDFJS.cMapUrl = (PDFJS.cMapUrl === undefined ? null : PDFJS.cMapUrl);

  /**
   * Specifies if CMaps are binary packed.
   * @var {boolean}
   */
  PDFJS.cMapPacked = PDFJS.cMapPacked === undefined ? false : PDFJS.cMapPacked;

  /**
   * By default fonts are converted to OpenType fonts and loaded via font face
   * rules. If disabled, the font will be rendered using a built in font
   * renderer that constructs the glyphs with primitive path commands.
   * @var {boolean}
   */
  PDFJS.disableFontFace = (PDFJS.disableFontFace === undefined ?
                           false : PDFJS.disableFontFace);

  /**
   * Path for image resources, mainly for annotation icons. Include trailing
   * slash.
   * @var {string}
   */
  PDFJS.imageResourcesPath = (PDFJS.imageResourcesPath === undefined ?
                              '' : PDFJS.imageResourcesPath);

  /**
   * Disable the web worker and run all code on the main thread. This will
   * happen automatically if the browser doesn't support workers or sending
   * typed arrays to workers.
   * @var {boolean}
   */
  PDFJS.disableWorker = (PDFJS.disableWorker === undefined ?
                         false : PDFJS.disableWorker);

  /**
   * Path and filename of the worker file. Required when the worker is enabled
   * in development mode. If unspecified in the production build, the worker
   * will be loaded based on the location of the pdf.js file. It is recommended
   * that the workerSrc is set in a custom application to prevent issues caused
   * by third-party frameworks and libraries.
   * @var {string}
   */
  PDFJS.workerSrc = (PDFJS.workerSrc === undefined ? null : PDFJS.workerSrc);

  /**
   * Disable range request loading of PDF files. When enabled and if the server
   * supports partial content requests then the PDF will be fetched in chunks.
   * Enabled (false) by default.
   * @var {boolean}
   */
  PDFJS.disableRange = (PDFJS.disableRange === undefined ?
                        false : PDFJS.disableRange);

  /**
   * Disable streaming of PDF file data. By default PDF.js attempts to load PDF
   * in chunks. This default behavior can be disabled.
   * @var {boolean}
   */
  PDFJS.disableStream = (PDFJS.disableStream === undefined ?
                         false : PDFJS.disableStream);

  /**
   * Disable pre-fetching of PDF file data. When range requests are enabled
   * PDF.js will automatically keep fetching more data even if it isn't needed
   * to display the current page. This default behavior can be disabled.
   *
   * NOTE: It is also necessary to disable streaming, see above,
   *       in order for disabling of pre-fetching to work correctly.
   * @var {boolean}
   */
  PDFJS.disableAutoFetch = (PDFJS.disableAutoFetch === undefined ?
                            false : PDFJS.disableAutoFetch);

  /**
   * Enables special hooks for debugging PDF.js.
   * @var {boolean}
   */
  PDFJS.pdfBug = (PDFJS.pdfBug === undefined ? false : PDFJS.pdfBug);

  /**
   * Enables transfer usage in postMessage for ArrayBuffers.
   * @var {boolean}
   */
  PDFJS.postMessageTransfers = (PDFJS.postMessageTransfers === undefined ?
                                true : PDFJS.postMessageTransfers);

  /**
   * Disables URL.createObjectURL usage.
   * @var {boolean}
   */
  PDFJS.disableCreateObjectURL = (PDFJS.disableCreateObjectURL === undefined ?
                                  false : PDFJS.disableCreateObjectURL);

  /**
   * Disables WebGL usage.
   * @var {boolean}
   */
  PDFJS.disableWebGL = (PDFJS.disableWebGL === undefined ?
                        true : PDFJS.disableWebGL);

  /**
   * Specifies the |target| attribute for external links.
   * The constants from PDFJS.LinkTarget should be used:
   *  - NONE [default]
   *  - SELF
   *  - BLANK
   *  - PARENT
   *  - TOP
   * @var {number}
   */
  PDFJS.externalLinkTarget = (PDFJS.externalLinkTarget === undefined ?
                              LinkTarget.NONE : PDFJS.externalLinkTarget);

  /**
   * Specifies the |rel| attribute for external links. Defaults to stripping
   * the referrer.
   * @var {string}
   */
  PDFJS.externalLinkRel = (PDFJS.externalLinkRel === undefined ?
                           'noreferrer' : PDFJS.externalLinkRel);

  /**
    * Determines if we can eval strings as JS. Primarily used to improve
    * performance for font rendering.
    * @var {boolean}
    */
  PDFJS.isEvalSupported = (PDFJS.isEvalSupported === undefined ?
                           true : PDFJS.isEvalSupported);

  var savedOpenExternalLinksInNewWindow = PDFJS.openExternalLinksInNewWindow;
  delete PDFJS.openExternalLinksInNewWindow;
  Object.defineProperty(PDFJS, 'openExternalLinksInNewWindow', {
    get: function () {
      return PDFJS.externalLinkTarget === LinkTarget.BLANK;
    },
    set: function (value) {
      if (value) {
        deprecated('PDFJS.openExternalLinksInNewWindow, please use ' +
          '"PDFJS.externalLinkTarget = PDFJS.LinkTarget.BLANK" instead.');
      }
      if (PDFJS.externalLinkTarget !== LinkTarget.NONE) {
        warn('PDFJS.externalLinkTarget is already initialized');
        return;
      }
      PDFJS.externalLinkTarget = value ? LinkTarget.BLANK : LinkTarget.NONE;
    },
    enumerable: true,
    configurable: true
  });
  if (savedOpenExternalLinksInNewWindow) {
    /**
     * (Deprecated) Opens external links in a new window if enabled.
     * The default behavior opens external links in the PDF.js window.
     *
     * NOTE: This property has been deprecated, please use
     *       `PDFJS.externalLinkTarget = PDFJS.LinkTarget.BLANK` instead.
     * @var {boolean}
     */
    PDFJS.openExternalLinksInNewWindow = savedOpenExternalLinksInNewWindow;
  }

  PDFJS.getDocument = displayAPI.getDocument;
  PDFJS.PDFDataRangeTransport = displayAPI.PDFDataRangeTransport;
  PDFJS.PDFWorker = displayAPI.PDFWorker;

  Object.defineProperty(PDFJS, 'hasCanvasTypedArrays', {
    configurable: true,
    get: function PDFJS_hasCanvasTypedArrays() {
      var value = displayDOMUtils.hasCanvasTypedArrays();
      return sharedUtil.shadow(PDFJS, 'hasCanvasTypedArrays', value);
    }
  });
  PDFJS.CustomStyle = displayDOMUtils.CustomStyle;
  PDFJS.LinkTarget = LinkTarget;
  PDFJS.addLinkAttributes = displayDOMUtils.addLinkAttributes;
  PDFJS.getFilenameFromUrl = displayDOMUtils.getFilenameFromUrl;
  PDFJS.isExternalLinkTargetSet = displayDOMUtils.isExternalLinkTargetSet;

  PDFJS.AnnotationLayer = displayAnnotationLayer.AnnotationLayer;

  PDFJS.renderTextLayer = displayTextLayer.renderTextLayer;

  PDFJS.Metadata = displayMetadata.Metadata;

  PDFJS.SVGGraphics = displaySVG.SVGGraphics;

  PDFJS.UnsupportedManager = displayAPI._UnsupportedManager;

  exports.globalScope = globalScope;
  exports.isWorker = isWorker;
  exports.PDFJS = globalScope.PDFJS;
}));
  }).call(pdfjsLibs);

  exports.PDFJS = pdfjsLibs.pdfjsDisplayGlobal.PDFJS;
  exports.build = pdfjsLibs.pdfjsDisplayAPI.build;
  exports.version = pdfjsLibs.pdfjsDisplayAPI.version;
  exports.getDocument = pdfjsLibs.pdfjsDisplayAPI.getDocument;
  exports.PDFDataRangeTransport =
    pdfjsLibs.pdfjsDisplayAPI.PDFDataRangeTransport;
  exports.PDFWorker = pdfjsLibs.pdfjsDisplayAPI.PDFWorker;
  exports.renderTextLayer = pdfjsLibs.pdfjsDisplayTextLayer.renderTextLayer;
  exports.AnnotationLayer =
    pdfjsLibs.pdfjsDisplayAnnotationLayer.AnnotationLayer;
  exports.CustomStyle = pdfjsLibs.pdfjsDisplayDOMUtils.CustomStyle;
  exports.PasswordResponses = pdfjsLibs.pdfjsSharedUtil.PasswordResponses;
  exports.InvalidPDFException = pdfjsLibs.pdfjsSharedUtil.InvalidPDFException;
  exports.MissingPDFException = pdfjsLibs.pdfjsSharedUtil.MissingPDFException;
  exports.SVGGraphics = pdfjsLibs.pdfjsDisplaySVG.SVGGraphics;
  exports.UnexpectedResponseException =
    pdfjsLibs.pdfjsSharedUtil.UnexpectedResponseException;
  exports.OPS = pdfjsLibs.pdfjsSharedUtil.OPS;
  exports.UNSUPPORTED_FEATURES = pdfjsLibs.pdfjsSharedUtil.UNSUPPORTED_FEATURES;
  exports.isValidUrl = pdfjsLibs.pdfjsSharedUtil.isValidUrl;
  exports.createObjectURL = pdfjsLibs.pdfjsSharedUtil.createObjectURL;
  exports.removeNullCharacters = pdfjsLibs.pdfjsSharedUtil.removeNullCharacters;
  exports.shadow = pdfjsLibs.pdfjsSharedUtil.shadow;
  exports.createBlob = pdfjsLibs.pdfjsSharedUtil.createBlob;
  exports.getFilenameFromUrl =
    pdfjsLibs.pdfjsDisplayDOMUtils.getFilenameFromUrl;
  exports.addLinkAttributes = pdfjsLibs.pdfjsDisplayDOMUtils.addLinkAttributes;
}));


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(40)))

/***/ },

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
// Angular 2
// rc2 workaround
var platform_browser_1 = __webpack_require__(64);
var core_1 = __webpack_require__(0);
// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function identity(value) { return value; };
if (false) {
    // Production
    platform_browser_1.disableDebugTools();
    core_1.enableProdMode();
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(core_1.ApplicationRef);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        platform_browser_1.enableDebugTools(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
exports.decorateModuleRef = _decorateModuleRef;
exports.ENV_PROVIDERS = PROVIDERS.slice();


/***/ },

/***/ 387:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var ng2_page_scroll_config_1 = __webpack_require__(249);
var PageScrollManager = (function () {
    function PageScrollManager() {
    }
    PageScrollManager.add = function (pageScroll) {
        this.runningInstances.push(pageScroll);
    };
    PageScrollManager.stopAll = function () {
        if (PageScrollManager.runningInstances.length > 0) {
            PageScrollManager.runningInstances.forEach(function (pageScroll, index) {
                pageScroll.stop();
            });
            return true;
        }
        return false;
    };
    PageScrollManager.remove = function (pageScroll) {
        var index = PageScrollManager.runningInstances.indexOf(pageScroll);
        if (index >= 0) {
            PageScrollManager.runningInstances.splice(index, 1);
            return true;
        }
        return false;
    };
    PageScrollManager.attachInterfereListeners = function (body) {
        ng2_page_scroll_config_1.PageScrollConfig._interruptEvents.forEach(function (event) { return body.addEventListener(event, PageScrollManager.listener); });
    };
    PageScrollManager.detachInterfereListeners = function (body) {
        ng2_page_scroll_config_1.PageScrollConfig._interruptEvents.forEach(function (event) { return body.removeEventListener(event, PageScrollManager.listener); });
    };
    // Static Array containing all possibly running scroll animations
    PageScrollManager.runningInstances = [];
    PageScrollManager.listener = function (event) {
        // Stop the scroll animation if the user interferes with it
        if (event.type !== 'keyup' || ng2_page_scroll_config_1.PageScrollConfig._interruptKeys.indexOf(event.keyCode) >= 0) {
            PageScrollManager.stopAll();
        }
    };
    return PageScrollManager;
}());
exports.PageScrollManager = PageScrollManager;


/***/ },

/***/ 388:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(573));


/***/ },

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this._clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    AppState = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppState);
    return AppState;
}());
exports.AppState = AppState;


/***/ },

/***/ 390:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(581));


/***/ },

/***/ 391:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(586));


/***/ },

/***/ 444:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
// App
__export(__webpack_require__(575));


/***/ },

/***/ 572:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(115);
var platform_browser_1 = __webpack_require__(64);
var ng2_page_scroll_config_1 = __webpack_require__(249);
var ng2_page_scroll_manager_1 = __webpack_require__(387);
var PageScroll = (function () {
    function PageScroll(router, document) {
        this.router = router;
        this.document = document;
        this.pageScrollOffset = null;
        this.pageScrollDuration = null;
        this.pageScrollEasing = null;
        this.pageScrollFinish = new core_1.EventEmitter();
        this.timer = null;
        this.interruptListenersAttached = false;
        this.body = document.body;
        this.scrollTopSources = [this.document.documentElement, this.body, this.document.body.parentNode];
    }
    PageScroll.isUndefinedOrNull = function (variable) {
        return (typeof variable === 'undefined') || variable === undefined || variable === null;
    };
    PageScroll.prototype.ngOnDestroy = function () {
        if (this.interruptListenersAttached) {
            ng2_page_scroll_manager_1.PageScrollManager.detachInterfereListeners(this.body);
        }
        return undefined;
    };
    PageScroll.prototype.stop = function () {
        return this.stopInternal(true);
    };
    PageScroll.prototype.handleClick = function (clickEvent) {
        var _this = this;
        if (this.routerLink) {
            // We need to navigate their first.
            // Navigation is handled by the routerLink directive
            // so we only need to listen for route change
            // Note: the change event is also emitted when navigating to the current route again
            var subscription_1 = this.router.events.subscribe(function (routerEvent) {
                if (routerEvent instanceof router_1.NavigationEnd) {
                    subscription_1.unsubscribe();
                    _this.scrollView(_this.href);
                }
                else if (routerEvent instanceof router_1.NavigationError || routerEvent instanceof router_1.NavigationCancel) {
                    subscription_1.unsubscribe();
                }
            });
        }
        else {
            this.scrollView(this.href);
        }
        return false; // to preventDefault()
    };
    PageScroll.prototype.scrollView = function (anchor) {
        var _this = this;
        // Stop all possibly running scroll animations
        ng2_page_scroll_manager_1.PageScrollManager.stopAll();
        var anchorTarget = this.document.getElementById(anchor.substr(1));
        if (anchorTarget === null) {
            // Target not found, so stop
            return;
        }
        var pageScrollOffset = (PageScroll.isUndefinedOrNull(this.pageScrollOffset) ? ng2_page_scroll_config_1.PageScrollConfig.defaultScrollOffset : this.pageScrollOffset);
        var targetScrollTop = anchorTarget.offsetTop - pageScrollOffset;
        var startScrollTop = this.scrollTopSources.reduce(function (previousValue, currentValue, currentIndex, array) {
            // Get the scrolltop value of the first scrollTopSource that returns a value for its "scrollTop" property
            // that is not undefined and unequal to 0
            return previousValue ? previousValue : (currentValue && currentValue.scrollTop);
        }, undefined);
        var distanceToScroll = targetScrollTop - startScrollTop;
        if (distanceToScroll === 0) {
            // We're at the final destination already, so stop
            return;
        }
        var startTime = new Date().getTime();
        var intervalConf = {
            startScrollTop: startScrollTop,
            targetScrollTop: targetScrollTop,
            distanceToScroll: distanceToScroll,
            startTime: startTime,
            easing: this.pageScrollEasing === null ? ng2_page_scroll_config_1.PageScrollConfig.defaultEasingFunction : this.pageScrollEasing
        };
        intervalConf.duration =
            this.pageScrollDuration === null ? ng2_page_scroll_config_1.PageScrollConfig.defaultDuration : this.pageScrollDuration;
        intervalConf.endTime = intervalConf.startTime + intervalConf.duration;
        if (intervalConf.duration <= ng2_page_scroll_config_1.PageScrollConfig._interval) {
            // We should go there directly, as our "animation" would have one big step
            // only anyway and this way we save the interval stuff
            this.body.scrollTop = intervalConf.targetScrollTop;
            this.pageScrollFinish.emit(true);
            return;
        }
        // Register the interrupt listeners if we want an interruptible scroll animation
        if (this.pageScrollInterruptible
            || (PageScroll.isUndefinedOrNull(this.pageScrollInterruptible) && ng2_page_scroll_config_1.PageScrollConfig.defaultInterruptible)) {
            ng2_page_scroll_manager_1.PageScrollManager.attachInterfereListeners(this.body);
            this.interruptListenersAttached = true;
        }
        this.timer = setInterval(function (conf) {
            var currentTime = new Date().getTime();
            var newScrollTop;
            if (conf.endTime <= currentTime) {
                _this.stopInternal(false);
                newScrollTop = conf.targetScrollTop;
            }
            else {
                newScrollTop = conf.easing(currentTime - conf.startTime, conf.startScrollTop, conf.distanceToScroll, conf.duration);
            }
            // Set the new scrollTop to all scrollTopSource elements
            _this.scrollTopSources.forEach(function (scrollTopSource) {
                if (scrollTopSource && !PageScroll.isUndefinedOrNull(scrollTopSource.scrollTop)) {
                    scrollTopSource.scrollTop = newScrollTop;
                }
            });
        }, ng2_page_scroll_config_1.PageScrollConfig._interval, intervalConf);
        // Register the instance as running one
        ng2_page_scroll_manager_1.PageScrollManager.add(this);
    };
    PageScroll.prototype.stopInternal = function (interrupted) {
        ng2_page_scroll_manager_1.PageScrollManager.remove(this);
        if (this.interruptListenersAttached) {
            ng2_page_scroll_manager_1.PageScrollManager.detachInterfereListeners(this.body);
            this.interruptListenersAttached = false;
        }
        if (this.timer) {
            clearInterval(this.timer);
            this.pageScrollFinish.emit(!interrupted);
            return true;
        }
        return false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PageScroll.prototype, "routerLink", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PageScroll.prototype, "href", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PageScroll.prototype, "pageScrollOffset", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PageScroll.prototype, "pageScrollDuration", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_a = typeof ng2_page_scroll_config_1.IEasingFunction !== 'undefined' && ng2_page_scroll_config_1.IEasingFunction) === 'function' && _a) || Object)
    ], PageScroll.prototype, "pageScrollEasing", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PageScroll.prototype, "pageScrollInterruptible", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', (typeof (_b = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _b) || Object)
    ], PageScroll.prototype, "pageScrollFinish", void 0);
    PageScroll = __decorate([
        core_1.Directive({
            selector: '[pageScroll]',
            host: {
                '(click)': 'handleClick($event)',
            }
        }),
        __param(1, core_1.Inject(platform_browser_1.DOCUMENT)), 
        __metadata('design:paramtypes', [(typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object, Object])
    ], PageScroll);
    return PageScroll;
    var _a, _b, _c;
}());
exports.PageScroll = PageScroll;


/***/ },

/***/ 573:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(115);
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
// console.log('`About` component loaded asynchronously');
var About = (function () {
    function About(route) {
        this.route = route;
    }
    About.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .data
            .subscribe(function (data) {
            // your resolved data from route
            _this.localState = data.yourData;
        });
        console.log('hello `About` component');
        // static data that is bundled
        // var mockData = require('assets/mock-data/mock-data.json');
        // console.log('mockData', mockData);
        // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
        // this.asyncDataWithWebpack();
    };
    About.prototype.asyncDataWithWebpack = function () {
        // you can also async load mock data with 'es6-promise-loader'
        // you would do this if you don't want the mock-data bundled
        // remember that 'es6-promise-loader' is a promise
        // var asyncMockDataPromiseFactory = require('es6-promise!assets/mock-data/mock-data.json');
        // setTimeout(() => {
        //
        //   let asyncDataPromise = asyncMockDataPromiseFactory();
        //   asyncDataPromise.then(json => {
        //     console.log('async mockData', json);
        //   });
        //
        // });
    };
    About = __decorate([
        core_1.Component({
            selector: 'about',
            styles: ["\n  "],
            template: "\n    <h1>About</h1>\n    <div>\n      For hot module reloading run\n      <pre>npm run start:hmr</pre>\n    </div>\n    <div>\n      <h3>\n        patrick@AngularClass.com\n      </h3>\n    </div>\n    <pre>this.localState = {{ localState | json }}</pre>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object])
    ], About);
    return About;
    var _a;
}());
exports.About = About;


/***/ },

/***/ 574:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
/*
 * Angular 2 decorators and services
 */
var core_1 = __webpack_require__(0);
var app_service_1 = __webpack_require__(389);
//noinspection TypeScriptUnresolvedFunction
var $ = __webpack_require__(179);
/*
 * App Component
 * Top Level Component
 */
var App = (function () {
    function App(appState) {
        this.appState = appState;
        this.angularclassLogo = 'assets/img/angularclass-avatar.png';
        this.name = 'Angular 2 Webpack Starter';
        this.url = 'https://twitter.com/AngularClass';
    }
    App.prototype.ngOnInit = function () {
        // console.log('Initial App State', this.appState.state);
    };
    App = __decorate([
        core_1.Component({
            selector: 'app',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [
                __webpack_require__(760)
            ],
            template: "\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof app_service_1.AppState !== 'undefined' && app_service_1.AppState) === 'function' && _a) || Object])
    ], App);
    return App;
    var _a;
}());
exports.App = App;
/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */


/***/ },

/***/ 575:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(64);
var forms_1 = __webpack_require__(229);
var http_1 = __webpack_require__(182);
var router_1 = __webpack_require__(115);
var hmr_1 = __webpack_require__(123);
/*
 * Platform and Environment providers/directives/pipes
 */
var environment_1 = __webpack_require__(279);
var app_routes_1 = __webpack_require__(577);
// App is our top level component
var app_component_1 = __webpack_require__(574);
var app_resolver_1 = __webpack_require__(576);
var app_service_1 = __webpack_require__(389);
var home_1 = __webpack_require__(390);
var about_1 = __webpack_require__(388);
var no_content_1 = __webpack_require__(391);
// Application wide providers
var APP_PROVIDERS = app_resolver_1.APP_RESOLVER_PROVIDERS.concat([
    app_service_1.AppState
]);
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    AppModule.prototype.hmrOnInit = function (store) {
        if (!store || !store.state)
            return;
        console.log('HMR store', store);
        this.appState._state = store.state;
        this.appRef.tick();
        delete store.state;
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // recreate elements
        var state = this.appState._state;
        store.state = state;
        store.disposeOldHosts = hmr_1.createNewHosts(cmpLocation);
        // remove styles
        hmr_1.removeNgStyles();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.App],
            declarations: [
                app_component_1.App,
                about_1.About,
                home_1.Home,
                no_content_1.NoContent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(app_routes_1.ROUTES, { useHash: true })
            ],
            providers: [
                environment_1.ENV_PROVIDERS,
                APP_PROVIDERS
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ApplicationRef !== 'undefined' && core_1.ApplicationRef) === 'function' && _a) || Object, (typeof (_b = typeof app_service_1.AppState !== 'undefined' && app_service_1.AppState) === 'function' && _b) || Object])
    ], AppModule);
    return AppModule;
    var _a, _b;
}());
exports.AppModule = AppModule;


/***/ },

/***/ 576:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var Observable_1 = __webpack_require__(6);
__webpack_require__(739);
var DataResolver = (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return Observable_1.Observable.of({ res: 'I am data' });
    };
    DataResolver = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DataResolver);
    return DataResolver;
}());
exports.DataResolver = DataResolver;
// an array of services to resolve routes with data
exports.APP_RESOLVER_PROVIDERS = [
    DataResolver
];


/***/ },

/***/ 577:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var home_1 = __webpack_require__(390);
var about_1 = __webpack_require__(388);
var no_content_1 = __webpack_require__(391);
exports.ROUTES = [
    { path: '', component: home_1.Home },
    { path: 'home', component: home_1.Home },
    { path: 'about', component: about_1.About },
    {
        path: 'detail', loadChildren: function () { return __webpack_require__.e/* System.import */(0).then(__webpack_require__.bind(null, 768)).then(function (mod) { return mod.__esModule ? mod.default : mod; }); }
    },
    { path: '**', component: no_content_1.NoContent },
];


/***/ },

/***/ 578:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {"use strict";
var core_1 = __webpack_require__(0);
var ColorSelectComponent = (function () {
    function ColorSelectComponent() {
        this.resumeRequest = new core_1.EventEmitter();
        this.launchRequest = new core_1.EventEmitter();
        this.essayRequest = new core_1.EventEmitter();
        this.grailRequest = new core_1.EventEmitter();
    }
    ColorSelectComponent.prototype.ngOnInit = function () {
    };
    ColorSelectComponent.prototype.ngOnChanges = function () {
    };
    ColorSelectComponent.prototype.selectColor = function (color) {
        console.log(this.quest);
        if (color == "launch") {
            this.launchKnight();
        }
        else {
            $("#wrapper").css("cursor", "url(../../../../assets/img/" + color + "sword.png), auto");
            if (this.quest == 'essay') {
                this.switchToEssay();
            }
            else if (this.quest == 'holygrail') {
                this.switchToGrail();
            }
            else {
                this.switchToResume();
            }
        }
    };
    ColorSelectComponent.prototype.switchToResume = function () {
        console.log('switching to resume...');
        this.resumeRequest.emit();
    };
    ColorSelectComponent.prototype.switchToEssay = function () {
        console.log('switching to essay...');
        this.essayRequest.emit();
    };
    ColorSelectComponent.prototype.launchKnight = function () {
        console.log('3..2..1.. launching!');
        this.launchRequest.emit();
    };
    ColorSelectComponent.prototype.switchToGrail = function () {
        console.log('switching to essay...');
        this.grailRequest.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ColorSelectComponent.prototype, "quest", void 0);
    ColorSelectComponent = __decorate([
        core_1.Component({
            selector: 'color-select',
            providers: [],
            directives: [],
            pipes: [],
            styles: [__webpack_require__(761)],
            template: __webpack_require__(731),
            events: ['resumeRequest', 'launchRequest', 'essayRequest', 'grailRequest']
        }), 
        __metadata('design:paramtypes', [])
    ], ColorSelectComponent);
    return ColorSelectComponent;
}());
exports.ColorSelectComponent = ColorSelectComponent;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(179)))

/***/ },

/***/ 579:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var NameSelectComponent = (function () {
    function NameSelectComponent() {
        this.switchRequest = new core_1.EventEmitter();
    }
    NameSelectComponent.prototype.ngOnInit = function () {
    };
    NameSelectComponent.prototype.ngOnChanges = function () {
    };
    NameSelectComponent.prototype.selectName = function (name) {
        this.name = name;
        this.switchToQuest();
    };
    NameSelectComponent.prototype.switchToQuest = function () {
        console.log('switching to quest...');
        this.switchRequest.emit();
    };
    NameSelectComponent = __decorate([
        core_1.Component({
            selector: 'name-select',
            providers: [],
            directives: [],
            pipes: [],
            styles: [__webpack_require__(762)],
            template: __webpack_require__(732),
            events: ['switchRequest']
        }), 
        __metadata('design:paramtypes', [])
    ], NameSelectComponent);
    return NameSelectComponent;
}());
exports.NameSelectComponent = NameSelectComponent;


/***/ },

/***/ 580:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var QuestSelectComponent = (function () {
    function QuestSelectComponent() {
        this.switchRequest = new core_1.EventEmitter();
    }
    QuestSelectComponent.prototype.ngOnInit = function () {
        this.firstTime = true;
    };
    QuestSelectComponent.prototype.ngOnChanges = function () {
    };
    QuestSelectComponent.prototype.selectQuest = function (quest) {
        if (this.firstTime) {
            this.quest = quest;
            this.switchToColor();
        }
    };
    QuestSelectComponent.prototype.switchToColor = function () {
        console.log('switching to rest...');
        this.switchRequest.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], QuestSelectComponent.prototype, "quest", void 0);
    QuestSelectComponent = __decorate([
        core_1.Component({
            selector: 'quest-select',
            providers: [],
            directives: [],
            pipes: [],
            styles: [__webpack_require__(763)],
            template: __webpack_require__(733),
            events: ['switchRequest']
        }), 
        __metadata('design:paramtypes', [])
    ], QuestSelectComponent);
    return QuestSelectComponent;
}());
exports.QuestSelectComponent = QuestSelectComponent;


/***/ },

/***/ 581:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, jQuery) {"use strict";
var core_1 = __webpack_require__(0);
var title_1 = __webpack_require__(582);
var x_large_1 = __webpack_require__(584);
var name_select_component_1 = __webpack_require__(579);
var quest_select_component_1 = __webpack_require__(580);
var color_select_component_1 = __webpack_require__(578);
var ng2_page_scroll_1 = __webpack_require__(729);
__webpack_require__(271);
var Home = (function () {
    function Home() {
    }
    Home.prototype.ngOnInit = function () {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            console.log('hello mobile user!');
            $(".question").css("font-size", "2em");
            $(".button").css("font-size", "1em");
            $("#replay").css("font-size", "4em");
        }
    };
    Home.prototype.ngAfterViewInit = function () {
        //use CSS animation endings for signalling/transitioning
        $("#loaded")
            .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", jQuery.proxy(function (e) {
            $("#loaded").css("visibility", "hidden"); //hide loading page
            $("#knight").css("visibility", "visible"); //show knight
            $("#knight").css("animation-name", "moveOnScreen"); //and animate him!
        }, this));
        $("#knight")
            .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", jQuery.proxy(function (e) {
            if ($("#knight").css("animation-name") == "launch") {
                $("#knight").css("animation-name", "moveOnScreen2"); //move knight back on screen
            }
            if ($("#knight").css("animation-name") == "moveOnScreen") {
                $("#name").css("animation-name", "fadein");
                $("#name").css("opacity", "1");
                $("#name").css("visibility", "visible");
                $("#speech").css("animation-name", "fadein");
                $("#speech").css("opacity", "1");
                $("#speech").css("visibility", "visible");
                $("#question-wrapper").css("visibility", "visible");
            }
            if ($("#knight").css("animation-name") == "crossBridge") {
                if (this.questSelectComponent.quest == "holygrail") {
                    $("#theCanvas").css("visibility", "visible");
                    $("#theCanvas").css("animation-name", "fadein");
                }
                else {
                    $("#theCanvas").css("visibility", "visible"); //make canvas visible
                    $("#theCanvas").css("animation-name", "grow"); // and expand it ***
                }
                $("#theCanvas").css("animation-duration", "2s");
            }
            //note: jQuery.proxy allows reference to 'this'
        }, this));
        $("#theCanvas")
            .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", jQuery.proxy(function (e) {
            $("#close").css("visibility", "visible"); //show close button
            $("#knight").css("transform", "none"); //reset knight direction
            $("#knight").css("left", "21%"); //and position
            $("#poof").css("animation", "toggle"); //toggle-reset poof cloud
            $("#gatekeeper").css("visibility", "visible"); //show gatekeeper
            if (this.questSelectComponent.quest != "holygrail") {
                $("#wrapper").css("overflow-y", "scroll");
            } //enable scrolling
        }, this));
        $("#color")
            .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", jQuery.proxy(function (e) {
            if ($("#color").css("opacity") == "0") {
                $("#poof").css("animation", "explode"); //explode the poof
                $("#poof").css("animation-duration", "1.5s");
                $("#gatekeeper").css("visibility", "hidden"); //gatekeeper apparates!
                $("#knight").css("animation", "crossBridge"); //knight crosses the bridge
                $("#knight").css("animation-duration", "6s");
                $("#knight").css("transform", "scaleX(-1)"); //and turns around
                $("#knight").css("left", "35%");
            }
        }, this));
        $("#speech")
            .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", jQuery.proxy(function (e) {
            if ($("#speech").css("animation-name") == "fadeout") {
                $("#question-wrapper").css("visibility", "hidden");
                $("#name").css("visibility", "hidden"); //and hide the question elements
                $("#quest").css("visibility", "hidden");
                $("#color").css("visibility", "hidden");
                $("#speech").css("visibility", "hidden");
            }
        }, this));
    };
    Home.prototype.nameToQuest = function () {
        $("#name").css("animation-name", "fadeout");
        $("#name").css("opacity", "0");
        $("#name").css("z-index", "0");
        $("#quest").css("animation-name", "fadein");
        $("#quest").css("opacity", "1");
        $("#quest").css("visibility", "visible");
        this.name = this.nameSelectComponent.name;
    };
    Home.prototype.questToColor = function () {
        $("#quest").css("animation-name", "fadeout");
        $("#quest").css("opacity", "0");
        $("#quest").css("z-index", "0");
        $("#color").css("animation-name", "fadein");
        $("#color").css("opacity", "1");
        $("#color").css("visibility", "visible");
        this.quest = this.questSelectComponent.quest;
        //convenient spot to toggle animations to be set again in the future
        $("#knight").css("animation", "toggle");
        $("#theCanvas").css("animation-name", "toggle");
        $("#wrapper").css("animation-name", "toggle");
        $("#replay").css("animation-name", "toggle");
    };
    Home.prototype.colorToNext = function () {
        $("#color").css("animation-name", "fadeout");
        $("#color").css("opacity", "0");
        $("#color").css("z-index", "0");
        $("#speech").css("animation-name", "fadeout");
        $("#speech").css("opacity", "0");
        $("#speech").css("z-index", "0");
        $("#question-wrapper").css("animation-name", "fadeout");
        $("#speech").css("opacity", "0");
        $("#speech").css("z-index", "0");
        this.color = this.colorSelectComponent.color;
    };
    //shows Resume
    Home.prototype.showResume = function () {
        this.colorToNext();
        //noinspection TypeScriptUnresolvedFunction
        var pdfjsLib = __webpack_require__(271);
        var pdfPath = '../../assets/docs/Ryan Coughlin Resume.pdf';
        pdfjsLib.PDFJS.workerSrc = "pdfjs-dist/build/pdf.worker.js";
        var loadingTask = pdfjsLib.getDocument(pdfPath);
        console.log(loadingTask);
        var PAGE_TO_VIEW = 1;
        var SCALE = 1.0;
        var loadingTask = pdfjsLib.getDocument(pdfPath);
        loadingTask.promise.then(function (pdfDocument) {
            // Request a first page
            return pdfDocument.getPage(1).then(function (pdfPage) {
                // Display page on the existing canvas with 100% scale.
                //var viewport = pdfPage.getViewport(1);
                var canvas = document.getElementById('theCanvas');
                var viewport = pdfPage.getViewport(4.0);
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                var ctx = canvas.getContext('2d');
                var renderTask = pdfPage.render({
                    canvasContext: ctx,
                    viewport: viewport
                });
                return renderTask.promise;
            });
        }).catch(function (reason) {
            console.error('Error: ' + reason);
        });
        $("#theCanvas").css("height", "auto");
    };
    Home.prototype.showEssay = function () {
        this.colorToNext();
        //noinspection TypeScriptUnresolvedFunction
        var pdfjsLib = __webpack_require__(271);
        var pdfPath = '../../assets/docs/chinessay.pdf';
        pdfjsLib.PDFJS.workerSrc = "pdfjs-dist/build/pdf.worker.js";
        var loadingTask = pdfjsLib.getDocument(pdfPath);
        console.log(loadingTask);
        var PAGE_TO_VIEW = 1;
        var SCALE = 1.0;
        var loadingTask = pdfjsLib.getDocument(pdfPath);
        loadingTask.promise.then(function (pdfDocument) {
            // Request a first page
            return pdfDocument.getPage(1).then(function (pdfPage) {
                // Display page on the existing canvas with 100% scale.
                //var viewport = pdfPage.getViewport(1);
                var canvas = document.getElementById('theCanvas');
                var viewport = pdfPage.getViewport(4.0);
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                var ctx = canvas.getContext('2d');
                var renderTask = pdfPage.render({
                    canvasContext: ctx,
                    viewport: viewport
                });
                return renderTask.promise;
            });
        }).catch(function (reason) {
            console.error('Error: ' + reason);
        });
        $("#theCanvas").css("height", "auto");
    };
    Home.prototype.showGrail = function () {
        this.colorToNext();
        var canvas = document.getElementById('theCanvas');
        var ctx = canvas.getContext("2d");
        var img = document.getElementById("holygrail");
        canvas.width = 660;
        canvas.height = 364;
        ctx.drawImage(img, 0, 0, 660, 364);
        $("#theCanvas").css("height", "100%");
    };
    //closes Resume
    Home.prototype.closeDocument = function () {
        $("#theCanvas").css("visibility", "hidden"); //hides resume canvas
        $("#close").css("visibility", "hidden"); //hides close button
        $("#wrapper").css("overflow-y", "hidden"); //disables scroll
        $("#replay").css("visibility", "visible"); //show replay button
        $("#replay").css("animation-name", "fadein");
    };
    //launch knight into the abyss when he lies about his own favorite color?!
    Home.prototype.launch = function () {
        $("#knight").css("animation", "launch");
        $("#knight").css("animation-duration", "1s");
    };
    //reset game to initial values
    Home.prototype.replay = function () {
        console.log("replay!!!");
        $("#name").css("z-index", "3");
        $("#quest").css("z-index", "2");
        $("#color").css("z-index", "1");
        $("#replay").css("visibility", "hidden");
        $("#wrapper").css("animation", "blur");
        $("#wrapper").css("animation-duration", "1s");
        $("#knight").css("animation-name", "moveOnScreen");
        $("#knight").css("animation-duration", "3s");
    };
    Home.prototype.testGrail = function () {
        $("#knight").css("animation", "crossBridge"); //knight crosses the bridge
        $("#knight").css("animation-duration", "1s");
        this.showGrail();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Home.prototype, "name", void 0);
    __decorate([
        core_1.ViewChild(name_select_component_1.NameSelectComponent), 
        __metadata('design:type', (typeof (_a = typeof name_select_component_1.NameSelectComponent !== 'undefined' && name_select_component_1.NameSelectComponent) === 'function' && _a) || Object)
    ], Home.prototype, "nameSelectComponent", void 0);
    __decorate([
        core_1.ViewChild(quest_select_component_1.QuestSelectComponent), 
        __metadata('design:type', (typeof (_b = typeof quest_select_component_1.QuestSelectComponent !== 'undefined' && quest_select_component_1.QuestSelectComponent) === 'function' && _b) || Object)
    ], Home.prototype, "questSelectComponent", void 0);
    __decorate([
        core_1.ViewChild(color_select_component_1.ColorSelectComponent), 
        __metadata('design:type', (typeof (_c = typeof color_select_component_1.ColorSelectComponent !== 'undefined' && color_select_component_1.ColorSelectComponent) === 'function' && _c) || Object)
    ], Home.prototype, "colorSelectComponent", void 0);
    Home = __decorate([
        core_1.Component({
            selector: 'home',
            providers: [
                title_1.Title,
            ],
            directives: [
                x_large_1.XLarge,
                name_select_component_1.NameSelectComponent,
                quest_select_component_1.QuestSelectComponent,
                color_select_component_1.ColorSelectComponent,
                ng2_page_scroll_1.PageScroll
            ],
            pipes: [],
            styles: [__webpack_require__(764)],
            template: __webpack_require__(734),
        }), 
        __metadata('design:paramtypes', [])
    ], Home);
    return Home;
    var _a, _b, _c;
}());
exports.Home = Home;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(179), __webpack_require__(179)))

/***/ },

/***/ 582:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(583));


/***/ },

/***/ 583:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(182);
var Title = (function () {
    function Title(http) {
        this.http = http;
        this.value = 'Angular 2';
    }
    Title.prototype.getData = function () {
        console.log('Title#getData(): Get Data');
        // return this.http.get('/assets/data.json')
        // .map(res => res.json());
        return {
            value: 'AngularClass'
        };
    };
    Title = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], Title);
    return Title;
    var _a;
}());
exports.Title = Title;


/***/ },

/***/ 584:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(585));


/***/ },

/***/ 585:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
/*
 * Directive
 * XLarge is a simple directive to show how one is made
 */
var XLarge = (function () {
    function XLarge(element, renderer) {
        // simple DOM manipulation to set font size to x-large
        // `nativeElement` is the direct reference to the DOM element
        // element.nativeElement.style.fontSize = 'x-large';
        // for server/webworker support use the renderer
        renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
    }
    XLarge = __decorate([
        core_1.Directive({
            selector: '[x-large]' // using [ ] means selecting attributes
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.Renderer !== 'undefined' && core_1.Renderer) === 'function' && _b) || Object])
    ], XLarge);
    return XLarge;
    var _a, _b;
}());
exports.XLarge = XLarge;


/***/ },

/***/ 586:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var NoContent = (function () {
    function NoContent() {
    }
    NoContent = __decorate([
        core_1.Component({
            selector: 'no-content',
            template: "\n    <div>\n      <h1>404: page missing</h1>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NoContent);
    return NoContent;
}());
exports.NoContent = NoContent;


/***/ },

/***/ 729:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(572));
__export(__webpack_require__(387));
__export(__webpack_require__(249));
//# sourceMappingURL=ng2-page-scroll.js.map

/***/ },

/***/ 731:
/***/ function(module, exports) {

module.exports = "<div class=\"oldstyle center question\">What is your favorite color?</div>\n<button class = \"button oldstyle\" (click)=\"selectColor('launch')\"><span>Blue... No, Yellow!</span></button>\n<button class = \"button oldstyle\" (click)=\"selectColor('blue')\"><span>Blue</span></button>\n<button class = \"button oldstyle\" (click)=\"selectColor('yellow')\"><span>Yellow</span></button>\n<button class = \"button oldstyle\" (click)=\"selectColor('red')\"><span>Red</span></button>\n"

/***/ },

/***/ 732:
/***/ function(module, exports) {

module.exports = "<div class = \"oldstyle center question\">What is your Name?</div>\n<button class = \"button oldstyle\" (click)=\"selectName('Employer')\"><span>Sir Lancelot</span></button>\n<button class = \"button oldstyle\" (click)=\"selectName('Friend')\"><span>Sir Robin</span></button>\n<button class = \"button oldstyle\" (click)=\"selectName('Family')\"><span>Sir Galahad</span></button>\n<button class = \"button oldstyle\" (click)=\"selectName('Andrew Ma')\"><span>King Arthur </span></button>\n"

/***/ },

/***/ 733:
/***/ function(module, exports) {

module.exports = "<div class=\"oldstyle center question\">What is your Quest?</div>\n<button class = \"button oldstyle\" (click)=\"selectQuest('resume')\"><span>Explore My Résumé</span></button>\n<button class = \"button oldstyle\" (click)=\"selectQuest('essay')\"><span>Venture to The Orient</span></button>\n<button class = \"button oldstyle\" (click)=\"selectQuest('holygrail')\"><span>Seek the Holy Grail</span></button>\n"

/***/ },

/***/ 734:
/***/ function(module, exports) {

module.exports = "<div id = \"wrapper\">\n    <img id= 'loaded' src=\"../../assets/img/monty_python_title.png\" >\n    <img id='world' src=\"../../assets/img/world7.png\" >\n    <img id = 'bridge'  src=\"../../assets/img/bridge.png\" >\n    <img id = 'sun'  src=\"../../assets/img/sun2.png\" >\n    <img id = 'knight'  src=\"../../assets/img/knight.png\" >\n    <img id = 'gatekeeper'  src=\"../../assets/img/wizard3.png\" >\n    <img id = 'close' src=\"../../assets/img/close.png\" (click)=\"closeDocument()\">\n    <div id = 'replay' class ='oldstyle' (click)=\"replay()\">Play Again?</div>\n    <img id= 'poof' src=\"../../assets/img/poof1.png\" >\n    <img id= 'speech' src=\"../../assets/img/speech.png\" >\n    <img id= 'holygrail' src=\"../../assets/img/holygrail.jpg\" >\n\n    <div id=\"question-wrapper\">\n        <name-select class = \"center\" id = 'name'  (switchRequest) = \"nameToQuest()\" ></name-select>\n        <quest-select class = \"center\" id = 'quest' (switchRequest) = \"questToColor()\"></quest-select>\n        <color-select class = \"center\" id = 'color' (resumeRequest) = \"showResume()\" (essayRequest) = \"showEssay()\" (launchRequest) = \"launch()\" (grailRequest) = \"showGrail()\"  [quest]=\"this.quest\"></color-select>\n    </div>\n\n    <canvas id = 'theCanvas'></canvas>\n    <!--<container  class = \"container\" id=\"pageContainer\" >  </container>-->\n</div>\n"

/***/ },

/***/ 739:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(6);
var of_1 = __webpack_require__(98);
Observable_1.Observable.of = of_1.of;
//# sourceMappingURL=of.js.map

/***/ },

/***/ 760:
/***/ function(module, exports) {

module.exports = "html, body{\n  height: 100%;\n  font-family: Arial, Helvetica, sans-serif\n}\n\nspan.active {\n  background-color: gray;\n}\n"

/***/ },

/***/ 761:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 762:
/***/ function(module, exports) {

module.exports = "\n"

/***/ },

/***/ 763:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 764:
/***/ function(module, exports) {

module.exports = "#name{\n    z-index: 3;\n    opacity: 0;\n    animation-duration: 1.5s;\n}\n\n#quest{\n    z-index: 2;\n    opacity: 0;\n    animation-duration: 1.5s;\n}\n\n#color{\n    z-index: 1;\n    opacity: 0;\n    animation-duration: 1.5s;\n}\n\n.center{\n    width: 100%;\n    text-align: center;\n    position: absolute;\n    left: 0%;\n    visibility: hidden;\n}\n\n#speech{\n    position: absolute;\n    left: 30%;\n    width:70%;\n    height:60%;\n    opacity: 0;\n    animation-duration: 1.5s;\n    visibility: hidden;\n\n}\n\n#world{\n    z-index: -1;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n\n#bridge{\n    z-index: -1;\n    position: absolute;\n    width: 34%;\n    height: 50%;\n    left:73%;\n    top: 53%;\n}\n\n@keyframes shine {\n    0% {transform: rotate(5deg);transform: skewY(-5deg);}\n    55% {transform: rotate(-5deg);transform: skewY(5deg);}\n    100% {transform: rotate(5deg);transform: skewY(-5deg);}\n}\n\n\n#sun{\n    z-index: 1;\n    position: absolute;\n    width: 20%;\n    height: 40%;\n    animation-name: shine;\n    animation-duration: 5s;\n    animation-iteration-count: infinite;\n    transform: rotate(5deg);\n}\n\n@keyframes fadeout {\n    from {opacity: 1;}\n    to {opacity: 0;}\n}\n\n@keyframes fadein {\n    from {opacity: 0;}\n    to {opacity: 1;}\n}\n\n\n@keyframes crossBridge {\n    0% {\n        left: 21%;\n        transform: none;\n    }\n    30% {\n        left:21%;\n        transform: none;\n    }\n    40%{\n        top: 43%;\n    }\n    48%{\n        top: 23%;\n    }\n    65% {\n        left: 110%;\n        transform: none;\n    }\n    66%{\n        transform: scaleX(-1);\n    }\n    73%{\n        top: 23%;\n    }\n    82%{\n        top: 43%;\n    }\n    100% {\n        left: 35%;\n        transform: scaleX(-1);\n    }\n}\n\n@keyframes moveOnScreen {\n    0% {left: -25%;}\n    25% {left: -25%;}\n    100% {left: 21%;}\n}\n\n@keyframes moveOnScreen2 {\n    0% {left: -25%;}\n    100% {left: 21%;}\n}\n\n\n@keyframes launch {\n    0%{top:43%;}\n    100%{top:-80%;}\n}\n\n#knight{\n    z-index: 2;\n    transform: none;\n    animation-name:none;\n    animation-duration: 3s;\n    position: absolute;\n    visibility: hidden;\n    width: 25%;\n    height: 50.5%;\n    left: 21%;\n    top:43%;\n\n}\n\n@keyframes backUp {\n    0% {transform:scale(1,1);}\n    100% {transform: scale(0,0);}\n\n    /*0%{top: 53%}*/\n    /*100%{top: 20%}*/\n}\n\n#gatekeeper{\n    z-index: 1;\n    position: absolute;\n    width: 18%;\n    height: 40%;\n    left: 56%;\n    top:53%;\n}\n\n.container{\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n@keyframes grow {\n    0% {transform: scale(0,0);}\n    100% {transform: scale(1,1);}\n}\n\n\n#theCanvas{\n    position: relative;\n    animation-duration: 6s;\n    width: 100%;\n    visibility: hidden;\n    z-index: 2;\n}\n\n#close{\n    width: 5%;\n    left:95%;\n    position: absolute;\n    visibility: hidden;\n    z-index: 3;\n    cursor: pointer;\n}\n\n#replay{\n    position: absolute;\n    top:10%;\n    height:10%;\n    font-size: 6em;\n    width:60%;\n    text-align: center;\n    left: 40%;\n    visibility: hidden;\n    cursor:pointer;\n    animation-duration: 1.5s;\n\n}\n@keyframes explode {\n    0%{opacity:1; }\n    30%{opacity:1; }\n    100%{opacity:0; }\n}\n\n#poof{\n    z-index: 0;\n    opacity: 0;\n    position: absolute;\n    width: 36%;\n    height: 65%;\n    left: 49%;\n    top:45%;\n\n\n}\n#holygrail{\n    animation-name: none;\n    animation-duration: 3s;\n    position: absolute;\n    visibility: hidden;\n    width: 27%;\n    height: 81.5%;\n    left: 36%;\n    top:19%;\n}\n\n#question-wrapper{\n    overflow-x: hidden;\n    overflow-y: auto;\n    width: 60%;\n    text-align: center;\n    position: absolute;\n    left: 35%;\n    height: 30%;\n    top: 7%;\n    visibility: hidden;\n    animation-duration: 1.5s;\n}"

/***/ },

/***/ 765:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
/*
 * Angular bootstraping
 */
var platform_browser_dynamic_1 = __webpack_require__(183);
var environment_1 = __webpack_require__(279);
var hmr_1 = __webpack_require__(123);
/*
 * App Module
 * our top level module that holds all of our components
 */
var app_1 = __webpack_require__(444);
/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return platform_browser_dynamic_1.platformBrowserDynamic()
        .bootstrapModule(app_1.AppModule).then(function (MODULE_REF) {
        if (false) {
            module["hot"]["accept"]();
            if (MODULE_REF.instance["hmrOnInit"]) {
                MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
            }
            if (MODULE_REF.instance["hmrOnStatus"]) {
                module["hot"]["apply"](function (status) {
                    MODULE_REF.instance["hmrOnStatus"](status);
                });
            }
            if (MODULE_REF.instance["hmrOnCheck"]) {
                module["hot"]["check"](function (err, outdatedModules) {
                    MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
                });
            }
            if (MODULE_REF.instance["hmrOnDecline"]) {
                module["hot"]["decline"](function (dependencies) {
                    MODULE_REF.instance["hmrOnDecline"](dependencies);
                });
            }
            module["hot"]["dispose"](function (store) {
                MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
                MODULE_REF.destroy();
                MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
            });
        }
        return MODULE_REF;
    })
        .then(environment_1.decorateModuleRef)
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
hmr_1.bootloader(main);


/***/ }

},[765]);
//# sourceMappingURL=main.map