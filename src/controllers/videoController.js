let videos = [
  {
    title: "Video #1",
    rating: 5,
    comments: 10,
    uploadedAt: "2 days ago",
    views: 51,
    id: 1,
  },
  {
    title: "Video #2",
    rating: 5,
    comments: 10,
    uploadedAt: "2 days ago",
    views: 51,
    id: 2,
  },
  {
    title: "Video #3",
    rating: 5,
    comments: 10,
    uploadedAt: "2 days ago",
    views: 1,
    id: 3,
  },
];
export const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", videos: videos });
export const watch = (req, res) => {
  const id = req.params.id;
  const video = videos[id - 1];
  console.log(req.params);
  return res.render("watch", { pageTitle: `Watching: ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const id = req.params.id; //
  const video = videos[id - 1];
  res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params; //
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => {
  console.log(req.params);
  res.send("Delete Video");
};
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  // 비디오 array에 비디오 추가
  const { title } = req.body;
  const newVideo = {
    title,
    rating: 0,
    comments: 0,
    uploadedAt: "Just Now",
    views: 0,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect("/");
};
