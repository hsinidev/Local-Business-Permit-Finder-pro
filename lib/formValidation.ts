
interface FormData {
    businessType: string;
    city: string;
    state: string;
}

interface FormErrors {
    businessType?: string;
    city?: string;
    state?: string;
}

export const validateForm = (formData: FormData): FormErrors => {
    const errors: FormErrors = {};

    if (!formData.businessType) {
        errors.businessType = 'Business type is required.';
    }

    if (!formData.city.trim()) {
        errors.city = 'City is required.';
    } else if (formData.city.length < 2) {
        errors.city = 'City must be at least 2 characters long.';
    }

    if (!formData.state) {
        errors.state = 'State is required.';
    }

    return errors;
};
