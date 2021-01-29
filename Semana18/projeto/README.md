# Cookenu
* Author: Vinicius Silveira Moraes

## Workbench's tables creation

### Users
```sql
CREATE TABLE cookenu_Users (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    email VARCHAR (100) UNIQUE NOT NULL,
    password VARCHAR (255) NOT NULL
);
```

### Recipes
```sql
CREATE TABLE cookenu_Recipes (
	id VARCHAR (255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR (500) NOT NULL,
    createdAt VARCHAR (10) NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES cookenu_Users(id)
);
```

### Followers
```sql
CREATE TABLE cookenu_Followers (
	user_id VARCHAR(255) NOT NULL,
    follower_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES cookenu_Users(id),
    FOREIGN KEY (follower_id) REFERENCES cookenu_Users(id)
);
```