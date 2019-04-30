Gatekeeper
==========

Authentication and authorisation service.

## Registration
Create an account for the user in the system.

## Login
Identify user via username and password and create a session for the user.


# Usage
Gatekeeper application uses docker containers and docker-compose to orchestrate the system.

## Development
Local development server runs on port `3000`

__Install dependencies__
```sh
docker-compose run server yarn
```

__Run server__
```sh
docker-compose up
```

__Start database service__
```sh
docker-compose run db
```
The database should be accessible at 
`postgresql://localhost:5432`