delete from inventory
where product_id = $1;

select * from inventory;