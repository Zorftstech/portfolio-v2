export interface PersonalData {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  country: string;
  address: string;
  gender: string;
}

export interface JobApplication {
  id: number;
  personal_data: PersonalData[];
  // resume: File;
  //   cover_letter: File;
  //   additional_attachment: File;
}

export interface YourRole {
  id: number;
  duty: string;
}

export interface YourSkills {
  id: number;
  skill: string;
}

export interface EmploymentType {
  id: number;
  type: string;
}

export interface Careers {
  id: number;
  department: string;
  summary: string;
  description: string;
  employment_type: EmploymentType[];
  your_role: YourRole[];
  your_skills: YourSkills[];
  job_application: JobApplication[];
}

export const careers: Careers[] = [
  {
    id: 1,
    department: "Graphics Design",
    summary:
      "As a graphics designer you will be creating visual text and imagery. You will also design creative content for online campaigns, print ads, websites, and even videos.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.",
    employment_type: [
      {
        id: 1,
        type: "Fulltime",
      },
      {
        id: 2,
        type: "Remote",
      },
      {
        id: 3,
        type: "Project Work",
      },
      {
        id: 4,
        type: "Flexible Schedule",
      },
    ],
    your_role: [
      {
        id: 1,
        duty: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. ",
      },
      {
        id: 2,
        duty: "Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ",
      },
      {
        id: 3,
        duty: "ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar ",
      },
      {
        id: 4,
        duty: "pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.",
      },
    ],
    your_skills: [
      {
        id: 1,
        skill:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. ",
      },
      {
        id: 2,
        skill:
          "Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ",
      },
      {
        id: 3,
        skill:
          "ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar ",
      },
      {
        id: 4,
        skill: "pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.",
      },
    ],
    job_application: [
      {
        id: 1,
        personal_data: [
          {
            id: 1,
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            country: "",
            address: "",
            gender: "",
          },
        ],
        // resume: new File([], "resume.pdf"), // Placeholder file
        // cover_letter: new File([], "cover_letter.pdf"), // Placeholder file
        // additional_attachment: new File([], "additional_attachment.pdf"), // Placeholder file
      },
    ],
  },
  {
    id: 2,
    department: "Graphics Design",
    summary:
      "As a graphics designer you will be creating visual text and imagery. You will also design creative content for online campaigns, print ads, websites, and even videos.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.",
    employment_type: [
      {
        id: 1,
        type: "Fulltime",
      },
      {
        id: 2,
        type: "Remote",
      },
      {
        id: 3,
        type: "Project Work",
      },
      {
        id: 4,
        type: "Flexible Schedule",
      },
    ],
    your_role: [
      {
        id: 1,
        duty: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. ",
      },
      {
        id: 2,
        duty: "Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ",
      },
      {
        id: 3,
        duty: "ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar ",
      },
      {
        id: 4,
        duty: "pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.",
      },
    ],
    your_skills: [
      {
        id: 1,
        skill:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. ",
      },
      {
        id: 2,
        skill:
          "Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ",
      },
      {
        id: 3,
        skill:
          "ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar ",
      },
      {
        id: 4,
        skill: "pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.",
      },
    ],
    job_application: [
      {
        id: 1,
        personal_data: [
          {
            id: 1,
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            country: "",
            address: "",
            gender: "",
          },
        ],
        // resume: new File([], "resume.pdf"), // Placeholder file
        // cover_letter: new File([], "cover_letter.pdf"), // Placeholder file
        // additional_attachment: new File([], "additional_attachment.pdf"), // Placeholder file
      },
    ],
  },
  {
    id: 3,
    department: "Graphics Design",
    summary:
      "As a graphics designer you will be creating visual text and imagery. You will also design creative content for online campaigns, print ads, websites, and even videos.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.",
    employment_type: [
      {
        id: 1,
        type: "Fulltime",
      },
      {
        id: 2,
        type: "Remote",
      },
      {
        id: 3,
        type: "Project Work",
      },
      {
        id: 4,
        type: "Flexible Schedule",
      },
    ],
    your_role: [
      {
        id: 1,
        duty: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. ",
      },
      {
        id: 2,
        duty: "Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ",
      },
      {
        id: 3,
        duty: "ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar ",
      },
      {
        id: 4,
        duty: "pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.",
      },
    ],
    your_skills: [
      {
        id: 1,
        skill:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. ",
      },
      {
        id: 2,
        skill:
          "Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ",
      },
      {
        id: 3,
        skill:
          "ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar ",
      },
      {
        id: 4,
        skill: "pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.",
      },
    ],
    job_application: [
      {
        id: 1,
        personal_data: [
          {
            id: 1,
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            country: "",
            address: "",
            gender: "",
          },
        ],
        // resume: new File([], "resume.pdf"), // Placeholder file
        // cover_letter: new File([], "cover_letter.pdf"), // Placeholder file
        // additional_attachment: new File([], "additional_attachment.pdf"), // Placeholder file
      },
    ],
  },
  {
    id: 4,
    department: "Graphics Design",
    summary:
      "As a graphics designer you will be creating visual text and imagery. You will also design creative content for online campaigns, print ads, websites, and even videos.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.",
    employment_type: [
      {
        id: 1,
        type: "Fulltime",
      },
      {
        id: 2,
        type: "Remote",
      },
      {
        id: 3,
        type: "Project Work",
      },
      {
        id: 4,
        type: "Flexible Schedule",
      },
    ],
    your_role: [
      {
        id: 1,
        duty: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. ",
      },
      {
        id: 2,
        duty: "Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ",
      },
      {
        id: 3,
        duty: "ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar ",
      },
      {
        id: 4,
        duty: "pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.",
      },
    ],
    your_skills: [
      {
        id: 1,
        skill:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. ",
      },
      {
        id: 2,
        skill:
          "Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ",
      },
      {
        id: 3,
        skill:
          "ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar ",
      },
      {
        id: 4,
        skill: "pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.",
      },
    ],
    job_application: [
      {
        id: 1,
        personal_data: [
          {
            id: 1,
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            country: "",
            address: "",
            gender: "",
          },
        ],
        // resume: new File([], "resume.pdf"), // Placeholder file
        // cover_letter: new File([], "cover_letter.pdf"), // Placeholder file
        // additional_attachment: new File([], "additional_attachment.pdf"), // Placeholder file
      },
    ],
  },
  {
    id: 5,
    department: "Graphics Design",
    summary:
      "As a graphics designer you will be creating visual text and imagery. You will also design creative content for online campaigns, print ads, websites, and even videos.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.",
    employment_type: [
      {
        id: 1,
        type: "Fulltime",
      },
      {
        id: 2,
        type: "Remote",
      },
      {
        id: 3,
        type: "Project Work",
      },
      {
        id: 4,
        type: "Flexible Schedule",
      },
    ],
    your_role: [
      {
        id: 1,
        duty: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. ",
      },
      {
        id: 2,
        duty: "Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ",
      },
      {
        id: 3,
        duty: "ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar ",
      },
      {
        id: 4,
        duty: "pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.",
      },
    ],
    your_skills: [
      {
        id: 1,
        skill:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa in purus interdum bibendum at a ligula. Suspendisse potenti. Fusce eget aliquam justo. ",
      },
      {
        id: 2,
        skill:
          "Donec vitae justo ultricies, pretium dui in, pretium justo. Nulla tincidunt sollicitudin sollicitudin. Donec nec rutrum lectus. Nulla ut efficitur erat. Mauris lacinia enim eu ",
      },
      {
        id: 3,
        skill:
          "ullamcorper volutpat. Nunc at egestas quam. Nam lacus urna, vehicula ac dapibus a, posuere vel magna. Donec in efficitur est, eu placerat lorem. Nulla eu purus rhoncus odio pulvinar ",
      },
      {
        id: 4,
        skill: "pharetra vitae eu leo. Quisque rhoncus vestibulum faucibus.",
      },
    ],
    job_application: [
      {
        id: 1,
        personal_data: [
          {
            id: 1,
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            country: "",
            address: "",
            gender: "",
          },
        ],
        // resume: new File([], "resume.pdf"), // Placeholder file
        // cover_letter: new File([], "cover_letter.pdf"), // Placeholder file
        // additional_attachment: new File([], "additional_attachment.pdf"), // Placeholder file
      },
    ],
  },
];
