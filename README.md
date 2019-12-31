## Creating The DB


```
PGHOST=localhost
PGUSER=
PGDATABASE=
PGPASSWORD=
PGPORT=5432
```

## Seeding

Run a the development server with `npm start` in the Host environment. We are only using vagrant for `psql` this week.

Both of these achieve the same result.

- Make a `GET` request to `/api/debug/reset` with `curl http://localhost:8001/api/debug/reset`.
- Use the browser to navigate to `http://localhost:8001/api/debug/reset`.

The `development` data is random. Each time we seed we expect to see different appointments.

## Api

### Days

`GET /api/days`

Response

```json
[
  {
    "id": 1,
    "name": "Monday",
    "appointments": [1, 2],
    "interviewers": [1, 2],
    "spots": 0
  }
]
```

### Appointments

`GET /api/appointments`

Response:

```json
{
  "1": {
    "id": 1,
    "time": "12pm",
    "interview": {
      "student": "Lydia Miller-Jones",
      "interviewer": 1
    }
  },
  "2": {
    "id": 2,
    "time": "1pm",
    "interview": {
      "student": "Archie Cohen",
      "interviewer": 2
    }
  }
}
```

`PUT /api/appointments/:id`

Body:

```json
{
  "interview": {
    "student": String,
    "interviewer": Number
  }
}
```

`DELETE /api/appointments/:id`

### Interviewers

`GET /api/interviewers`

Response:

```json
{
  "1": {
    "id": 1,
    "name": "Sylvia Palmer",
    "avatar": "https://i.imgur.com/LpaY82x.png"
  },
  "2": {
    "id": 2,
    "name": "Tori Malcolm",
    "avatar": "https://i.imgur.com/Nmx0Qxo.png"
  }
}
```
