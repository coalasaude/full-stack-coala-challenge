variable "project_id" {
  description = "ID do projeto do Google Cloud"
  type        = string
}

variable "region" {
  description = "Região do Google Cloud"
  type        = string
  default     = "us-west1"
}

variable "image_url" {
  description = "URL da imagem do container (Google Container Registry)"
  type        = string
}

variable "service_name" {
  description = "Nome do serviço Cloud Run"
  type        = string
  default     = "my-cloud-run-service"
}

variable "container_env" {
  description = "Variáveis de ambiente para o container"
  type        = map(string)
  default = {
    DATABASE_URL = "mysql://user:password@host:port/dbname"
  }
}

variable "container_memory" {
  description = "Memória do container (ex: 256Mi)"
  type        = string
  default     = "256Mi"
}

variable "container_cpu" {
  description = "CPU do container (ex: 0.5)"
  type        = string
  default     = "0.5"
}
