Rails.application.config.dfile_paths = {
	"PROCESSING" => "/var/dfile/processing/",
	"PACKAGING" => "/var/dfile/packaging/",
	"STORE" => "/var/dfile/store",
  "TRASH" => "/var/dfile/trash"
}
Rails.application.config.api_key = ENV["API_KEY"]
