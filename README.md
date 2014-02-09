WP-Easy
=======

WordPress template for fast and easy theme develop

Привет, друзья

Эта тема - заготовка для меня и моих колег, которые "конвеерно" клепают шаблоны для WordPress и интеграцию нужно делать максимально быстро


// Заголовки страниц h1-h2
Внутренние страницы записей и постов обрамлены H1 без гиперссылки.
У внутренних страниц прописаны класы 
	-	"page-title"	-	заголовок для страниц
	-	"page-single"	-	заголовок для постов
	-	"cat-title"		-	заголовок для рубрик
	-	"inner-title"	-	общий

Для внутренних страниц (и записей) на 404 ошибку стоит заголовок H2 

//	Вывод изображения - тумбы
	-	вывод первой записи из поста "<?php echo catch_that_image(); ?>"
	-	вывод миниатюры "<?php the_post_thumbnail(array(250,250)); ?>"
Для вывода изображений в рубриках используется последовательность:
	1.	Сначала проверяется есть ли миниатюра, если да - показывать миниатюру
	2. 	Если миниатюры нет - выводится первое изображение в посте
	3. 	Если нет ни миниатюры, ни картинок в посте - выводится стандартная картинка "img/noimage.jpg"

// Страница Запись page.php 
