const servers = [
    {id:"1", name:"server1", status:"online"},
    {id:"2", name:"server2", status:"online"},
    {id:"3", name:"server3", status:"offline"},
    {id:"4", name:"server4", status:"online"},
    {id:"5", name:"server5", status:"offline"}
]

export const getAll = (req, res)=>{
    res.status(200).json(servers);
}
