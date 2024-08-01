interface UserInfos {
    firstName: string;
    lastName: string;
    age: number;
  }
  
  interface KeyData {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  }
  
  export interface UserMainData {
    id: number;
    userInfos: UserInfos;
    todayScore?: number;
    score?: number;
    keyData: KeyData;
  }
  
  interface Session {
    day: string;
    kilogram: number;
    calories: number;
  }
  
  export interface UserActivity {
    userId: number;
    sessions: Session[];
  }
  
  interface AverageSession {
    day: number;
    sessionLength: number;
  }
  
  export interface UserAverageSessions {
    userId: number;
    sessions: AverageSession[];
  }

interface PerformanceData {
    value: number;
    kind: number;
  }
  
  export interface UserPerformance {
    userId: number;
    kind: Record<number, string>;
    data: PerformanceData[];
  }