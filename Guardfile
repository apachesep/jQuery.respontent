# Guardfile for the jQuery respontent plugin javascript files.
# This minifies the non-minified .js-file.

# Concatenate the contents of all files into jquery.respontent.min.js
guard :concat, type: "js", files: %w(jquery.respontent media/jquery.respontent.iframes media/jquery.respontent.images media/jquery.respontent.tables), input_dir: "src/js", output: "src/js/jquery.respontent.min"

# Minify jquery.respontent.min.js
guard 'uglify', :destination_file => "src/js/jquery.respontent.min.js" do
  watch ('src/js/jquery.respontent.min.js')
end