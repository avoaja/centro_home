# centro-fullstack-exercise
**For ease of review, please create a fork of this repo and make a pull request on your fork with the changes outlined in the [exercise](https://docs.google.com/document/d/1L67fpjSySfx2vvoWpEBsaQE_zKLfBFVDfQPy7WUxzwA/edit)**
- [Link to frontend specifications](VISUAL_SPEC.md)
- The Django Rest Framework application lives in the `inventorycount` directory

# Prerequisites

- [Docker for Mac](https://docs.docker.com/docker-for-mac/install/)
- [Docker for PC](https://docs.docker.com/desktop/windows/install/)  

# Local Development

Start the dev server for local development:
```bash
docker-compose up
```

Run a server side command inside the docker container:

```bash
docker-compose run --rm web [command]
```

# Getting the backend setup to make API calls

Please execute the following the steps once the docker container is running via docker compose!

1. Bootstrap the data with data:

```bash
docker-compose run --rm web ./manage.py bootstrap
```

2. Ingest the CSV data:

```bash
docker-compose run --rm web ./manage.py backfill_inventory_log_data --email admin@example.com --csv andrews_inventory_data.csv
```

3. Navigate to localhost:8000:

- Login with the credentials username: admin@example.com password: admin123

4. Call the endpoint http://localhost:8000/api/v1/inventory-log/

- Thi should result in the response you'll need to start building the frontend!

