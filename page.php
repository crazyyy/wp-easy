<?php get_header(); ?>
	
	<!-- section -->
	<section role="main">
		<!-- article -->
		<?php if (have_posts()): while (have_posts()) : the_post(); ?>
		<article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?>>
			<h1 class="page-title inner-title"><?php the_title(); ?></h1>

			<?php the_content(); ?>
			
			<?php comments_template( '', true ); ?>
			
			<?php edit_post_link(); ?>
			
		</article>
		<!-- /article -->
	<?php endwhile; else: ?>
		<!-- article -->
		<article>
			
			<h2 class="page-title inner-title"><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>
		</article>
		<!-- /article -->
	
	<?php endif; ?>
	</section>
	<!-- /section -->
	
<?php get_sidebar(); ?>

<?php get_footer(); ?>