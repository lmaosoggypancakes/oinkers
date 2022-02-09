# API Documentation
This section involes the proper format of requests when using the Oinkers API.
## Transactions
When creating, editing, or viewing transactions a proper JWT token must be supplied in the request's `Authorization` header as a bearer token.
- Creating a transaction - `POST /api/transactions/`
```
{
name: string,
amount: float,
user: {
    connect: {
        username: string
        }
    }
}
```
- Viewing user transactions - `GET /api/transactions/<username>` { no body }
- Editing a transaction - `PUT /api/transactions/<id>`
```
{
name: string,
amount: float,
user: {
    connect: {
        username: string
        }
    }
}
```