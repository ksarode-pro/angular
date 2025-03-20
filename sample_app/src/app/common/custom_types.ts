export interface User {
    Id: number;
    Name: string;
    Photo: string;
}

export interface Task {
    Id: number;
    Name: string;
    Description: string;
    Status: string;
    EndDate: string;
    UserId: number;
} 