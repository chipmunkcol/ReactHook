import * as React from 'react'

function Form(){

// const [제목, set제목] = React.useState("")
// const [닉네임, set닉네임] = React.useState("")
// const [비밀번호, set비밀번호] = React.useState("")
// const [desc, setDesc] = React.useState("")

const [유저정보, set유저정보] = React.useState({
    제목:'',
    닉네임:'',
    비밀번호:'',
    desc:''
})

const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(유저정보);
    set유저정보((prev) => ({...prev, 
        제목:'',
        닉네임:'',
        비밀번호:'',
        desc:''
    }))
}

    return(
        <div>
            
            <form onSubmit={onSubmit}>
                <div>
                    <span>제목</span> 
                    <input 
                    value={유저정보.제목}
                    onChange={(e)=>{
                        set유저정보((prev) => ({...prev, 제목: e.target.value}))
                    }}/>
                    <span>닉네임</span> 
                    <input
                    value={유저정보.닉네임} 
                    onChange={(e)=>{
                        set유저정보((prev) => ({...prev, 닉네임: e.target.value}))
                    }}/>
                </div>
                <div>
                    <span>비밀번호</span> 
                    <input 
                    value={유저정보.비밀번호}
                    onChange={(e)=>{
                        set유저정보((prev) => ({...prev, 비밀번호 : e.target.value}))
                    }}/>
                </div>
                <div>
                    <textarea 
                    style={{width:'46vw'}}
                    value={유저정보.desc}
                    onChange={(e)=>{
                        set유저정보((prev) => ({...prev, desc : e.target.value}))
                    }}
                    />
                </div>
                <button>등록</button>
            </form>

        </div>
    )
}

export default Form;