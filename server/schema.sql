-- run first
create database emailer;

\c emailer

-- run second
CREATE TABLE regions
(
  id SERIAL PRIMARY KEY NOT NULL,
  name varchar(20)
);

CREATE TABLE roles
(
  id SERIAL PRIMARY KEY NOT NULL,
  name varchar(40)
);

CREATE TABLE unique_differentiators
(
  id SERIAL PRIMARY KEY NOT NULL,
  name varchar(60)
);

CREATE TABLE use_cases
(
  id SERIAL PRIMARY KEY NOT NULL,
  name varchar(60)
);

CREATE TABLE industries
(
  id SERIAL PRIMARY KEY NOT NULL,
  name varchar(60)
);

CREATE TABLE ctas
(
  id SERIAL PRIMARY KEY NOT NULL,
  snippet varchar(400),
  role1_id int references roles(id) not null,
  role2_id int references roles(id) not null,
);

CREATE TABLE wywyns
(
  id SERIAL PRIMARY KEY NOT NULL,
  snippet text,
  usecase_id int references use_cases(id) not null,
  ud_id int references unique_differentiators(id) not null,
  industry_id int references industries(id) not null
);

CREATE TABLE customer_snippets
(
  id SERIAL PRIMARY KEY NOT NULL,
  snippet text,
  usecase_id int references use_cases(id) not null,
  ud_id int references unique_differentiators(id) not null,
  industry_id int references industries(id) not null,
  region_id int references regions(id) not null,
  role_id int references roles(id) not null
);


-- regions
INSERT INTO regions (name) VALUES ('north');
INSERT INTO regions (name) VALUES ('south');
INSERT INTO regions (name) VALUES ('west');
INSERT INTO regions (name) VALUES ('east');

-- roles
INSERT INTO roles (name) VALUES ('CIO');
INSERT INTO roles (name) VALUES ('CTO');
INSERT INTO roles (name) VALUES ('C-Level');
INSERT INTO roles (name) VALUES ('VP IT');
INSERT INTO roles (name) VALUES ('Director IT');
INSERT INTO roles (name) VALUES ('Developer');
INSERT INTO roles (name) VALUES ('Line of Business');

-- unique differentiators
INSERT INTO unique_differentiators (name) VALUES ('reusability');
INSERT INTO unique_differentiators (name) VALUES ('security/governance');
INSERT INTO unique_differentiators (name) VALUES ('self-service');

--use cases
INSERT INTO use_cases (name) VALUES ('360 degree view');
INSERT INTO use_cases (name) VALUES ('faster time to market');
INSERT INTO use_cases (name) VALUES ('modernize legacy systems');
