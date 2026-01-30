import { supabase } from './supabase';

export interface RegistrationData {
    name: string;
    email: string;
    phone: string;
    college: string;
    year_of_study: string;
    team_size: string;
    event_name?: string;
}

export interface RegistrationResponse {
    success: boolean;
    message: string;
    data?: unknown;
    error?: unknown;
}

export async function submitRegistration(data: RegistrationData): Promise<RegistrationResponse> {
    try {
        const { data: result, error } = await supabase
            .from('registrations')
            .insert([data])
            .select();

        if (error) {
            // Check for duplicate email error
            if (error.code === '23505') {
                return {
                    success: false,
                    message: 'This email is already registered. Please use a different email.',
                    error,
                };
            }

            return {
                success: false,
                message: error.message || 'Failed to submit registration. Please try again.',
                error,
            };
        }

        return {
            success: true,
            message: 'Registration submitted successfully!',
            data: result,
        };
    } catch (error: unknown) {
        return {
            success: false,
            message: 'An unexpected error occurred. Please try again later.',
            error,
        };
    }
}
