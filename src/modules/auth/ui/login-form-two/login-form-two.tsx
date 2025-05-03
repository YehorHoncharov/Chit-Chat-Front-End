import { View, Text, TouchableOpacity, Switch, Image } from "react-native";
import { Input } from "../../../../shared/ui/input"
import { useForm, Controller } from "react-hook-form";
import { IRegister } from "../../types";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Button } from "../../../../shared/ui/button";
import { styles } from "./login-form-two.styles";
import { sendCode } from "../../hooks/useCode";
import { ILoginCode } from "./log-form-two.style";


export function LoginFormTwo(){
    const { handleSubmit, control } = useForm<ILoginCode>()
	const router = useRouter()

	const params = useLocalSearchParams<{
		email: string,
	}>()

	function onSubmit(data: {code:string}){
		sendCode(params.email, data.code)
	}
	
    return(
        <View style={styles.container}>
			<View style={{gap: 10, justifyContent: 'center', alignItems: 'center'}}>
				<Image style={styles.image} source={require('./../../../../shared/ui/images/sign-in-image.png')} />
				<View style={styles.signUpText}>
			</View>
			
				<Text style={styles.signUp}>user@gmail.com</Text>
				<View style={{alignItems: 'center'}}>
					<Text style={{opacity: 0.4}}>We have sent you a message with code</Text>
            		<Text style={{opacity: 0.4}}>on your email</Text>
				</View>
            	
			</View>

            <View>
			<Controller
					control={control}
					name="code"
					rules={{
						required: {
							value: true,
							message: "Code is required",
						},
					}}
					render={({ field, fieldState }) => {
						return (
							<Input
								placeholder="code"
								value={field.value}
								onChangeText={field.onChange}
                            	onChange={field.onChange}
								autoCorrect={false}
							/>
						);
					}}
				/>
				
			
			</View>
			
			<View style={{gap: 10}}>
				<Button onPress={handleSubmit(onSubmit)} label="Enter"></Button>
			</View>

			
        </View>
    )
}