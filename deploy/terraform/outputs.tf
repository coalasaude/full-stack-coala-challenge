output "cloud_run_url" {
  description = "URL do serviço no Google Cloud Run"
  value       = google_cloud_run_service.default.status[0].url
}
