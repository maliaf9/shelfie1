create table inventory (
    product_id serial primary key,
    name text,
    price numeric,
    img_url text
);

insert into inventory (name, price, img_url)
VALUES
('joe', 5, 'https://ssl.quiksilver.com/www/store.quiksilver.eu/html/images/catalogs/global/dcshoes-products/all/default/hi-res/adys100163_n2bynyjah,p_bbl_frt1.jpg'),
('joellll', 90, 'https://cdnc.lystit.com/photos/9329-2015/11/02/burberry-parade-red-pleat-detail-wool-cashmere-trench-coat-red-product-1-231084131-normal.jpeg
');