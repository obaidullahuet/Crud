#include<iostream>
using namespace std;
int main()
{
    int i=1;
    int s=0;
    int n;
    cout<<"enter yur num"<<endl;
    cin>>n;
    while(i<=n)
    {
        s=s+i;
        i++;
    }
    cout<<s<<endl;
    return 0;
}