select u.id, u.first_name, u.last_name, c.id, c.customer_name, COUNT(ct.id) summ
from contact ct

inner join customer c
ON ct.customer_id = c.id

inner join user_account u
ON ct.user_account_id = u.id

GROUP BY c.id, c.customer_name, u.id, u.first_name, u.last_name

HAVING summ > 1

order by u.id ASC;