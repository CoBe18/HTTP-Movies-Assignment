# HTTP Movies portfolio repairs
Use Node 22.12+. In client, run npm ci and npm run build. The Netlify configuration sets client as the build base and serves movie list/details through a serverless function. Vite development provides the same GET routes.
The client no longer calls localhost in a deployed visitor's browser. Movie detail routing handles changes and errors; saved movies persist locally and are deduplicated.
The existing six sample movie records are preserved. The serverless API is read-only; it does not provide shared movie editing. The original Express server remains as the assignment's optional local API.
