import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<Integer>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        
        Stack<Integer> stack = new Stack<Integer>();
        for (int i = list.size()-1; i >= 0; i--) {
            int value = list.remove(i);
            stack.push(value);
        }
        
        Queue<Integer> row = new LinkedList<Integer>();
        while (!stack.isEmpty()) {
            int value = stack.pop();
            row.add(value);
        }
        
        list.add(6);
        list.add(7);
        list.add(8);
        list.add(9);
        list.add(10);
        
        stack = new Stack<Integer>();
        for (int i = list.size()-1; i >= 0; i--) {
            int value = list.remove(i);
            stack.push(value);
        }
        
        row = new LinkedList<Integer>();
        while (!stack.isEmpty()) {
            int value = stack.pop();
            row.add(value);
        }
        
        while (!row.isEmpty()) {
            System.out.println(row.remove());
        }
    }
}
