# Bookshelf Elder

Bookshelf Elder is a full-stack application for managing a collection of books. It consists of two main packages:

1. **Frontend**: A Next.js-based web application for the user interface.
2. **Backend**: A NestJS-based API server for managing data and business logic.

This project allows users to add, filter, and manage books in their collection with a modern and responsive design.

---

## Features

- **Frontend**:

  - User-friendly interface for managing books.
  - Filtering and sorting options.
  - Responsive design for desktop and mobile.
  - Built with Next.js, Radix UI, and Tailwind CSS.

- **Backend**:
  - RESTful API for managing books and user interactions.
  - Database integration using Prisma ORM.
  - Swagger documentation for API endpoints.
  - Built with NestJS and TypeScript.

---

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v22 or higher)
- **npm** or **yarn**
- **PostgreSQL** (or any supported database)
- **Docker** (for containerization)
- **Terraform** (for infrastructure deployment)
- **Google Cloud SDK** (for managing Google Cloud resources)

---

## Getting Started

1. Clone the Repository

```bash
git clone https://github.com/your-username/bookshelf-elder.git
cd bookshelf-elder
```

2. Set Up the Backend: checkout `packages/backend/README.md` file.
3. Set Up the Frontend: checkout `packages/frontend/README.md` file.

## Running Both Packages Together

To run both the frontend and backend simultaneously:

```bash
  npm run start:dev
```

Now, you can access the application at http://localhost:3000, and the API will be running at http://localhost:8080.

## Terraform Deployment

This project includes Terraform configuration files for deploying the infrastructure required for the application. The Terraform files are located in the root directory or a dedicated terraform/ folder.

Steps to Deploy with Terraform:

1.  Install Terraform: Ensure Terraform is installed on your system. You can download it from Terraform's official website.
2.  Build and Push Docker Images:

        - Build the Docker images for both the frontend and backend:

        ```bash
        docker build -t gcr.io/<your-project-id>/bookshelf-backend:latest ./packages/backend
        docker build -t gcr.io/<your-project-id>/bookshelf-frontend:latest ./packages/frontend
        ```

        - Push the images to Google Container Registry (GCR):

        ```bash
        docker push gcr.io/<your-project-id>/bookshelf-backend:latest
        docker push gcr.io/<your-project-id>/bookshelf-frontend:latest
        ```

3.  Configure Variables: Update the .tfvars or terraform.tfvars file with your specific configuration, such as database credentials, cloud provider details, and resource names.
4.  Initialize Terraform: Navigate to the directory containing the Terraform files and run:

```bash
terraform init
```

5.  Plan the Deployment: Preview the changes Terraform will make to your infrastructure:

```bash
terraform plan
```

6.  Apply the Deployment: Deploy the infrastructure:

```bash
terraform apply
```

7.  Access the Deployed Resources: After deployment, Terraform will output the necessary information, such as the API URL or database connection string.

## Project Structure

```bash
bookshelf-elder/
├── packages/
│   ├── backend/             # Backend package (NestJS API)
│   └── frontend/            # Frontend package (Next.js app)
├── terraform/               # Terraform configuration files
├── .gitignore               # Git ignore file
├── package.json             # Root project metadata and scripts
└── README.md                # Project overview and instructions
```

## Technologies Used

- Frontend:

  - Next.js
  - Radix UI
  - Tailwind CSS
  - TypeScript

- Backend:

  - NestJS
  - Prisma ORM
  - Swagger
  - TypeScript

- Infrastructure:
  - Docker
  - Terraform
  - Google Cloud Platform (GCP)
