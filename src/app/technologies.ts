export interface Technology {
  id: number;
  name: string;
  description: string;
}

export const technologies = [
  {
    id: 1,
    name: 'Angular',
    description:
      'Angular is a development platform, built on TypeScript. As a platform, Angular includes - A component-based framework for building scalable web applications, A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and A suite of developer tools to help you develop, build, test, and update your code. Leran more at : https://angular.io/guide/what-is-angular',
  },
  {
    id: 2,
    name: 'React',
    description:
      'React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the V in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native. React implements one-way reactive data flow, which reduces the boilerplate and is easier to reason about than traditional data binding.',
  },
  {
    id: 3,
    name: 'Vue',
    description:
      'VueJS is an open source progressive JavaScript framework used to develop interactive web interfaces. It is one of the famous frameworks used to simplify web development. VueJS focusses on the view layer. It can be easily integrated into big projects for front-end development without any issues.',
  },
];
