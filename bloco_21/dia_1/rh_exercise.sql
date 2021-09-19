-- 1
SELECT MAX(salary) FROM hr.employees;

-- 2
SELECT 	MAX(salary) - MIN(salary) AS salary_difference FROM hr.employees;

-- 3
SELECT job_id, ROUND(AVG(salary), 2) AS average_salary FROM hr.employees
GROUP BY job_id
ORDER BY average_salary DESC;

-- 4
SELECT SUM(salary) AS total_money FROM hr.employees;

-- 5
SELECT MAX(salary) AS biggest_salary,
	MIN(salary) AS smallest_salary,
    SUM(salary) AS total_salary,
    ROUND(AVG(salary), 2) AS average_salary
FROM hr.employees;

-- 6
SELECT job_id, COUNT(*) AS total FROM hr.employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';
-- OU
SELECT job_id, COUNT(*) AS total FROM hr.employees
WHERE job_id = 'IT_PROG';

-- 7
SELECT job_id, SUM(salary) AS each_job_total FROM hr.employees
GROUP BY job_id;

-- 8
SELECT job_id, SUM(salary) AS each_job_total FROM hr.employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';

-- 9
SELECT job_id, ROUND(AVG(salary), 2) AS each_job_avg FROM hr.employees
GROUP BY job_id
HAVING job_id <> 'IT_PROG'
ORDER BY each_job_avg DESC;

-- 10
SELECT department_id, ROUND(AVG(salary), 2) AS avg_salary, COUNT(*) AS employees_number FROM hr.employees
GROUP BY department_id
HAVING employees_number > 10;

-- 11
SET SQL_SAFE_UPDATES = 0;
UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';
SELECT * FROM hr.employees;

-- 12
SELECT * FROM hr.employees
WHERE CHAR_LENGTH(first_name) >= 8;

-- 13
SELECT employee_id, first_name, YEAR(hire_date) AS hire_year FROM hr.employees;

-- 14
SELECT employee_id, first_name, DAY(hire_date) AS hire_day FROM hr.employees;

-- 15
SELECT employee_id, first_name, MONTH(hire_date) AS hire_month FROM hr.employees;

-- 16
SELECT UCASE(CONCAT(first_name, ' ', last_name)) AS employee_name FROM hr.employees;

-- 17
SELECT last_name, hire_date FROM hr.employees
WHERE hire_date LIKE '1987-07%';
-- OU
SELECT last_name, hire_date FROM hr.employees
WHERE hire_date BETWEEN '1987-07-01' AND '1987-07-31';

-- 18
SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) AS days_in_company
FROM hr.employees;