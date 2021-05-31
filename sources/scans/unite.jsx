/**
 *	Unite objects on all layers
 *  Original by zertle on Adobe Support Community
 *  August 8, 2016
 *  Updated by Una Ada <una@anarchy.website>
 *  May 31, 2021
 * 
 * 	https://community.adobe.com/t5/illustrator/pathfinder-unite-all-objects-on-each-layer/m-p/8505153#M216666
 */

function UniteAllLayers() {
  // Exit early if there are no files open
  if (!app.documents.length) return;
  var doc = app.activeDocument,
      layers = doc.layers;
  // Clear selection
  doc.selection = null;
  // Loop through all layers
  for(var i = 0; i < layers.length; i++){
    // Select current layer
    var layer = layers[i];
    // Skip if layer is locked
    if(layer.locked) continue;
    // Select everything on the current layer
    layer.hasSelectedArtwork = true;
    // Unite layer contents
    app.executeMenuCommand("group");
    app.executeMenuCommand("Live Pathfinder Add");
    app.executeMenuCommand("expandStyle");
    // Clear selection
    doc.selection = null;
  }
}
UniteAllLayers();
