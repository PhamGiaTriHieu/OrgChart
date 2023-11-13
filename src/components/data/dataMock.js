const dataMock = [
  {
    employee_no: 'tanngo',
    title: 'Intern Developer',
    line_manager: {
      employee_no: 'sontran',
      title: 'Senior Bridge Engineer',
      line_manager: {
        employee_no: 'changsc',
        title: 'General Director',
        line_manager: null,
        full_name: 'SC Chang',
      },
      full_name: 'Son Tran',
    },
    full_name: 'Tan Ngo',
  },
  {
    employee_no: 'trongho',
    title: 'Intermediate Backend Developer',
    line_manager: {
      employee_no: 'sontran',
      title: 'Senior Bridge Engineer',
      line_manager: {
        employee_no: 'changsc',
        title: 'General Director',
        line_manager: null,
        full_name: 'SC Chang',
      },
      full_name: 'Son Tran',
    },
    full_name: 'Trong Ho',
  },
  {
    employee_no: 'tydao',
    title: 'Intern Developer',
    line_manager: {
      employee_no: 'sontran',
      title: 'Senior Bridge Engineer',
      line_manager: {
        employee_no: 'changsc',
        title: 'General Director',
        line_manager: null,
        full_name: 'SC Chang',
      },
      full_name: 'Son Tran',
    },
    full_name: 'Ty Dao',
  },
  {
    employee_no: 'quynhnguyen',
    title: 'General Admin',
    line_manager: {
      employee_no: 'changsc',
      title: 'General Director',
      line_manager: null,
      full_name: 'SC Chang',
    },
    full_name: 'Quynh Nguyen',
  },
  {
    employee_no: 'su.ha',
    title: 'Senior Backend Developer',
    line_manager: {
      employee_no: 'sontran',
      title: 'Senior Bridge Engineer',
      line_manager: {
        employee_no: 'changsc',
        title: 'General Director',
        line_manager: null,
        full_name: 'SC Chang',
      },
      full_name: 'Son Tran',
    },
    full_name: 'Su Ha',
  },
  {
    employee_no: 'administrator',
    title: 'Junior Backend Developer',
    line_manager: {
      employee_no: 'sontran',
      title: 'Senior Bridge Engineer',
      line_manager: {
        employee_no: 'changsc',
        title: 'General Director',
        line_manager: null,
        full_name: 'SC Chang',
      },
      full_name: 'Son Tran',
    },
    full_name: 'Admin Admin',
  },
  {
    employee_no: 'ledienhau',
    title: 'Intern Developer',
    line_manager: {
      employee_no: 'sontran',
      title: 'Senior Bridge Engineer',
      line_manager: {
        employee_no: 'changsc',
        title: 'General Director',
        line_manager: null,
        full_name: 'SC Chang',
      },
      full_name: 'Son Tran',
    },
    full_name: 'Hau Le',
  },
  {
    employee_no: 'thuannh',
    title: 'Intermediate Backend Developer',
    line_manager: {
      employee_no: 'sontran',
      title: 'Senior Bridge Engineer',
      line_manager: {
        employee_no: 'changsc',
        title: 'General Director',
        line_manager: null,
        full_name: 'SC Chang',
      },
      full_name: 'Son Tran',
    },
    full_name: 'Thuan Nguyen',
  },
  {
    employee_no: 'trungnv',
    title: 'Senior Frontend Developer',
    line_manager: {
      employee_no: 'sontran',
      title: 'Senior Bridge Engineer',
      line_manager: {
        employee_no: 'changsc',
        title: 'General Director',
        line_manager: null,
        full_name: 'SC Chang',
      },
      full_name: 'Son Tran',
    },
    full_name: 'Trung Nguyen',
  },
  {
    employee_no: 'maivo',
    title: 'Intermediate Frontend Developer',
    line_manager: {
      employee_no: 'sontran',
      title: 'Senior Bridge Engineer',
      line_manager: {
        employee_no: 'changsc',
        title: 'General Director',
        line_manager: null,
        full_name: 'SC Chang',
      },
      full_name: 'Son Tran',
    },
    full_name: 'Mai Vo',
  },
  {
    employee_no: 'tri.nguyen',
    title: 'Intermediate Frontend Developer',
    line_manager: {
      employee_no: 'sontran',
      title: 'Senior Bridge Engineer',
      line_manager: {
        employee_no: 'changsc',
        title: 'General Director',
        line_manager: null,
        full_name: 'SC Chang',
      },
      full_name: 'Son Tran',
    },
    full_name: 'Tri Nguyen',
  },
  {
    employee_no: 'employee',
    title: 'Junior Backend Developer',
    line_manager: {
      employee_no: 'sontran',
      title: 'Senior Bridge Engineer',
      line_manager: {
        employee_no: 'changsc',
        title: 'General Director',
        line_manager: null,
        full_name: 'SC Chang',
      },
      full_name: 'Son Tran',
    },
    full_name: 'Employee ',
  },
  {
    employee_no: 'changsc',
    title: 'General Director',
    line_manager: null,
    full_name: 'SC Chang',
  },
  {
    employee_no: 'liemvh',
    title: 'Intermediate Frontend Developer',
    line_manager: {
      employee_no: 'sontran',
      title: 'Senior Bridge Engineer',
      line_manager: {
        employee_no: 'changsc',
        title: 'General Director',
        line_manager: null,
        full_name: 'SC Chang',
      },
      full_name: 'Son Tran',
    },
    full_name: 'Liem Vu',
  },
  {
    employee_no: 'anpham',
    title: 'Intermediate Frontend Developer',
    line_manager: {
      employee_no: 'sontran',
      title: 'Senior Bridge Engineer',
      line_manager: {
        employee_no: 'changsc',
        title: 'General Director',
        line_manager: null,
        full_name: 'SC Chang',
      },
      full_name: 'Son Tran',
    },
    full_name: 'An Pham',
  },
  {
    employee_no: 'sontran',
    title: 'Senior Bridge Engineer',
    line_manager: {
      employee_no: 'changsc',
      title: 'General Director',
      line_manager: null,
      full_name: 'SC Chang',
    },
    full_name: 'Son Tran',
  },
  {
    employee_no: 'hieupham',
    title: 'Intern Developer',
    line_manager: {
      employee_no: 'sontran',
      title: 'Senior Bridge Engineer',
      line_manager: {
        employee_no: 'changsc',
        title: 'General Director',
        line_manager: null,
        full_name: 'SC Chang',
      },
      full_name: 'Son Tran',
    },
    full_name: 'Hieu Pham',
  },
  {
    employee_no: 'buiminhduong',
    title: 'Junior Backend Developer',
    line_manager: {
      employee_no: 'sontran',
      title: 'Senior Bridge Engineer',
      line_manager: {
        employee_no: 'changsc',
        title: 'General Director',
        line_manager: null,
        full_name: 'SC Chang',
      },
      full_name: 'Son Tran',
    },
    full_name: 'Bui Minh Duong',
  },
  {
    employee_no: 'duongnlbn',
    title: 'Intermediate Frontend Developer',
    line_manager: {
      employee_no: 'sontran',
      title: 'Senior Bridge Engineer',
      line_manager: {
        employee_no: 'changsc',
        title: 'General Director',
        line_manager: null,
        full_name: 'SC Chang',
      },
      full_name: 'Son Tran',
    },
    full_name: 'Nguyen Le Ba Nguyen Duong',
  },
  {
    employee_no: 'namphuong',
    title: 'Junior Backend Developer',
    line_manager: {
      employee_no: 'sontran',
      title: 'Senior Bridge Engineer',
      line_manager: {
        employee_no: 'changsc',
        title: 'General Director',
        line_manager: null,
        full_name: 'SC Chang',
      },
      full_name: 'Son Tran',
    },
    full_name: 'Phuong Tran',
  },
];

export default dataMock;
