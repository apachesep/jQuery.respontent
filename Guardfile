# Guardfile for the jQuery respontent plugin javascript files.
# This minifies the non-minified .js-file.

# Concatenate the contents of all files into jquery.respontent.all.min.js
guard :concat, type: "js", files: %w(jquery.respontent media/jquery.respontent.iframes media/jquery.respontent.images media/jquery.respontent.tables), input_dir: "src/js", output: "src/js/jquery.respontent.all.min"

# Minify jquery.respontent.all.min.js
guard 'uglify', :destination_file => "src/js/jquery.respontent.all.min.js" do
  watch ('src/js/jquery.respontent.all.min.js')
end