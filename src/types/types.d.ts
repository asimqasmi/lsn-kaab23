export interface ITeacherContent {
  teacherItem: ITeacher;
}
export interface ITeacher {
  isSelected: boolean | undefined;
  _id: string;
  name: string;
  number: string;
}
