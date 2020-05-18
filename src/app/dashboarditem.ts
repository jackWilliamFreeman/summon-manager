export interface DashboardItem {
  id: Number;
  name: string;
  hit_Points: number;
  has_Advantage: boolean;
  damage_Taken: number;
  remaining_HP: number;
  dice_Roll: number;
  critical: boolean;
  temp_HP: number;
}
