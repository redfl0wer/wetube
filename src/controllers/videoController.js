import Video from "../models/Video";

export const home = (req, res) => {
  Video.find();
  res.render("home", { pageTitle: "Home" });
};
export const watch = (req, res) => {
  const id = req.params.id;
  return res.render("watch", { pageTitle: `Watching` });
};
export const getEdit = (req, res) => {
  const id = req.params.id; //
  res.render("edit", { pageTitle: `Editing` });
};
export const postEdit = (req, res) => {
  const { id } = req.params; //
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => {
  res.send("Delete Video");
};
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  // 비디오 array에 비디오 추가
  const { title } = req.body;
  return res.redirect("/");
};
