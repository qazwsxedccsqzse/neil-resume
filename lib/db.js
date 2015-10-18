var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * 工作經驗
 * @param string job_title 工作職稱
 * @param string content 工作內容
 * @param string from 開始工作時間
 * @param string to 結束工作時間
 */
var Work_Experience = new Schema({
	job_title : String,
	content : String,
	from : String,
	to : String
});

/**
 * 學校經歷
 * @param string schoolName 學校名稱
 * @param string department 科系
 * @param string illustration 說明有參加什麼活動之類的
 */
var School_Experience = new Schema({
	schoolName : String,
	department : String,
	illustration : String
});

/**
 * 專案描述
 * @param string projectName 專案名稱
 * @param string url 專案網址
 * @param string description 專案描述
 * @param stringArray usingSkills 使用技能 
 */
 var Project_Schema = new Schema({
 	projectName : String,
 	url : String,
 	description : String,
 	usingSkills : [String]
 });

 /**
  * 技能描述
  * @param string skillName 技能名稱
  * @param int rate 自我評估(1-100)
  */
  var SkillsRate_Schema = new Schema({
  	skillName : String,
  	rate : Number
  });


 /**
  * 聯絡我
  * @param string email 電子信箱
  */
 var ContactMeSchema = new Schema({
	email : String
 });


 mongoose.model('WorkExperience',Work_Experience);
 mongoose.model('SchoolExperience',School_Experience);
 mongoose.model('Project',Project_Schema);
 mongoose.model('SkillsRate',SkillsRate_Schema);
 mongoose.model('ContactMe',ContactMeSchema);
 

 mongoose.connect('mongodb://localhost/resume');
