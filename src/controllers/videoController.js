export const trending = (req, res) => {
  const videos = [
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
      views: 51,
      id: 3,
    },
  ];
  res.render("home", { pageTitle: "Home", videos: videos });
};
export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => {
  console.log(req.params);
  res.send("Delete Video");
};
export const upload = (req, res) => res.send("Upload Video");
