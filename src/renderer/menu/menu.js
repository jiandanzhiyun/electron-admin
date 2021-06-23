let menu = {};

/**
 * 首页
 * @type {{name: string, path: string, icon: string}}
 */
menu.home = {
  name: '首页',
  path: '/',
  icon: 'fa fa-tachometer',
};


/**
 * 组织管理
 * @type {{name: string, icon: string, children: {}}}
 */
menu.organization = {
  name: '组织管理',
  icon: 'fa fa-th',
  children: {}
};
let organizationManage = menu.organization.children;
organizationManage.organ_structure = {
  name: '组织架构',
  path: '/structure',
};
organizationManage.organ_role = {
  name: '角色管理',
  path: '/role',
};
organizationManage.organ_personnel = {
  name: '人员管理',
  path: '/personnel',
};
/**
 * 资料管理
 * @type {{name: string, icon: string, children: {}}}
 */
menu.means_manage = {
  name: '资料管理',
  icon: 'fa fa-file-text-o',
  children: {}
};

let ContentManage = menu.means_manage.children;
ContentManage.data_bank = {
  name: '资料库',
  path: '/data_bank',
};

/**
 * 课程管理
 * @type {{name: string, icon: string, children: {}}}
 */
menu.course_manage = {
  name: '课程管理',
  icon: 'fa fa-user-circle-o',
  children: {}
};
let CourseManage = menu.course_manage.children;

CourseManage.course = {
  name: '课程库',
  path: '/course',
};


/**
 * 训练管理
 * @type {{name: string, icon: string, children: {}}}
 */
menu.train_manage = {
  name: '训练管理',
  icon: 'fa fa-sitemap',
  children: {}
};
let TrainManage = menu.train_manage.children;

TrainManage.train = {
  name: '训练列表',
  path: '/train',
};

/**
 * 考试管理
 * @type {{name: string, icon: string, children: {}}}
 */

menu.subject_manage = {
  name: '考试管理',
  icon: 'fa fa-qrcode',
  children: {}
};
let SubjectManage = menu.subject_manage.children;

SubjectManage.subject = {
  name: '考试科目管理',
  path: '/exam_subject',
};

SubjectManage.permission = {
  name: '考试评价',
  path: '/evaluate',
};

export default menu;