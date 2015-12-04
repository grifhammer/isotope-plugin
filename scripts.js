// external js: isotope.pkgd.js

$( document ).ready( function() {
    // init Isotope
    var $container = $('.isotope').isotope({
        itemSelector: '.hero-item',
        layoutMode: 'fitRows',
        getSortData: {
            name: '.name',
            attribute: '.attribute',
            winrate: '.winrate'
        },
        sortAscending: {
          name: true,
          attribute: true,
          winrate: false
        }
    });

  // filter functions
    var filterFns = {
    // show if number is greater than 50
        winrateGreaterThan80: function() {
            var number = $(this).find('.winrate').text();
            return ( number > .8);
        },
        // show if name ends with -ium
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match( /ium$/ );
        }
    };

  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $container.isotope({ filter: filterValue });
  });

  // bind sort button click
  $('#sorts').on( 'click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $container.isotope({ sortBy: sortByValue });
  });
  
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  
});
