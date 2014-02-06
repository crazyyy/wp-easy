<!-- sidebar -->
<aside class="sidebar" role="complementary">

	<?php if ( is_active_sidebar(widget-area-1) ) : ?>
		<?php dynamic_sidebar( 'widget-area-1' ); ?>
	<?php else : ?>
 
		<!-- Здесь код вывода того, что необходимо... -->
 
	<?php endif; ?>
 
</aside>
<!-- /sidebar -->