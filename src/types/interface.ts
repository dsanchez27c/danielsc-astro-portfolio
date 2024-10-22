interface IconInterface {
  name: string;
  size: number;
  color: string;
}

interface ItemInterface {
  icon: IconInterface;
  name: string;
  value: string;
}

interface CardInfo {
  icon: IconInterface;
  name: string;
  description: string;
}

interface InterfaceEduc {
  name: string;
  date: string;
  description: string;
}

interface InterfaceSkills {
  name: string;
  percentage: string;
  classWidth: string;
}