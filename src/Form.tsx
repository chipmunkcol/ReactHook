import * as React from 'react'
import { useForm } from 'react-hook-form'

function Form(){

const { register, handleSubmit} = useForm()

const onSubmit = (data:any) => {
    console.log(data)
}

    return(
        <div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <span>제목</span> 
                    <input {...register("유저정보", {required: true, minLength: 2} )}/>
                    {/* <span>닉네임</span> 
                    <input /> */}
                </div>
                {/* <div>
                    <span>비밀번호</span> 
                    <input />
                </div>
                <div>
                    <textarea 
                    style={{width:'46vw'}}
                    />
                </div> */}
                <button>등록</button>
            </form>

        </div>
    )
}

export default Form;