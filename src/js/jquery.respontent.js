/*	
 * jQuery respontent v1.0.0
 * @requires jQuery 1.5.0 or later
 *
 * respontent.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * Dual licensed under the MIT and GPL licenses.
 * http://en.wikipedia.org/wiki/MIT_License
 * http://en.wikipedia.org/wiki/GNU_General_Public_License
 */


(function( $ ) {

	var _PLUGIN_	= 'respontent',
		_ABBR_		= 'respontent',
		_VERSION_	= '1.0.0';


	//	Plugin already excists
	if ( $[ _PLUGIN_ ] )
	{
		return;
	}


	//	Global variables
	var _c = {}, _d = {}, _e = {},
		_pluginInitiated = false;


	/*
		Class
	*/
	$[ _PLUGIN_ ] = function( $wrapper, opts )
	{
		this.$wrapper	= $wrapper;
		this.opts  		= opts;

		if ( this.opts.images )
		{
			this.images();
		}
		if ( this.opts.youtube )
		{
			this.youtube();
		}
		if ( this.opts.googlemaps )
		{
			this.googlemaps();
		}
		if ( this.opts.tables )
		{
			this.tables();
		}

		return this;
	};
	$[ _PLUGIN_ ].prototype = {

		images: function()
		{
			this.$wrapper
				.find( 'img' )
				.addClass( _c[ 'image' ] );
		},
		youtube: function()
		{
			this.$wrapper
		    	.find( 'iframe, object, embed' )
		    	.filter( '[src*="youtube.com"], [src*="youtube-nocookie.com"]' )
		    	.each(
		        	function()
					{
		        	    wrapInParent( $(this), _c[ 'youtube' ] );
					}
				);
		},
		googlemaps: function()
		{
		    this.$wrapper
		    	.find( 'iframe' )
		    	.filter( '[src*="maps.google"]' )
		    	.each(
		        	function()
					{
		        	    wrapInParent( $(this), _c[ 'googlemaps' ] );
					}
				);
		},
		tables: function()
		{
			var tbl = ( this.opts.tables == 'no-styling' )
				? ''
				: _c[ 'table-pretty' ] + ' ';

		    this.$wrapper
		    	.find( 'table' )
		    	.each(
			        function()
			        {
			            var $t = $(this);
			
			            if ( !$t.find( 'tbody' ).length )
			            {
			                $t.wrapInner( '<tbody />' ).find( 'tbody' );
			            }

			            var cls = ( $t.find( 'th' ).length || $t.find( 'thead' ).length || $t.find( 'tfoot' ).length  )
							? _c[ 'table-scroll' ]
							: _c[ 'table' ];

			            wrapInParent( $t, tbl + cls );
			        }
			    );
		}

	};


	/*
		jQuery Plugin
	*/
	$.fn[ _PLUGIN_ ] = function( opts )
	{
		//	First time plugin is fired
		if ( !_pluginInitiated )
		{
			initiatePlugin();
		}

		//	Extend options
		opts = $.extend( true, {}, $[ _PLUGIN_ ].defaults, opts );

		return this.each(
			function()
			{
				var $node = $(this);
				if ( $node.data( _PLUGIN_ ) )
				{
					return;
				}
				$node.data( _PLUGIN_, new $[ _PLUGIN_ ]( $node, opts ) );
			}
		);
	};


	/*
		Options
	*/
	$[ _PLUGIN_ ].defaults = {
		images		: true,
		youtube		: true,
		googlemaps	: true,
		tables		: true
	};

	$[ _PLUGIN_ ].version = _VERSION_;


	/*
		Private functions
	*/
    function wrapInParent( $t, iClass )
    {
        var $p = $t.parent();

        if ( $p.children().length == 1 )
        {
            $p.addClass( iClass );
        }
        else
        {
            $t.wrap( '<div class="' + iClass + '" />' );
        }
    }
	function initiatePlugin()
	{
		_pluginInitiated = true;

		_c = function( c ) { return _ABBR_ + '-' + c; };
		_c.add = function( c )
		{
			c = c.split( ' ' );
			for ( var d in c )
			{
				_c[ c[ d ] ] = _c( c[ d ] );
			}
		};
		_c.add( 'image youtube googlemaps table table-scroll table-pretty' );
	};

})( jQuery );
