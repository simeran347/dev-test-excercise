# Use the official Node.js 14 image as the base
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory
COPY . .

# Build the Next.js application
RUN npm run build

# Set the command to run the application
CMD ["npm", "start"]
