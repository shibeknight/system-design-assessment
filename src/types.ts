export interface Video {
  _id: string;
  title: string;
  description: string;
  category: string;
  uploaded_by: string;
  upload_date: string;
  thumbnail_url: string;
  video_id: string;
}
//API does not provide profile pictures and views currently
export interface VideoWithProfile extends Video {
  userProfilePic: string;
  views: number;
}
