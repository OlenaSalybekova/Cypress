FROM cypress/browsers:node-18.12.0-slim-firefox102
WORKDIR /e2e/hillel.cy.js
COPY package.json ./
RUN npm install
COPY . .
CMD ["npx", "cypress", "run", "--browser", "firefox"]
