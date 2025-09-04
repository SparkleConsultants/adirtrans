import React from 'react';
import { Shield, AlertTriangle, CheckCircle, Phone, Eye, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const SafetyCompliance: React.FC = () => {
  const safetyMeasures = [
    {
      icon: Shield,
      title: 'Driver Verification',
      description: 'Background checks, license verification, and regular assessments',
      status: 'active'
    },
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: 'GPS tracking, route monitoring, and speed limit enforcement',
      status: 'active'
    },
    {
      icon: Lock,
      title: 'Secure Payments',
      description: 'Encrypted transactions and transparent pricing',
      status: 'active'
    },
    {
      icon: Phone,
      title: '24/7 Emergency Support',
      description: 'Immediate response team for safety incidents',
      status: 'active'
    }
  ];

  const complianceAreas = [
    'PNG Transport Authority regulations',
    'Vehicle safety standards',
    'Driver licensing requirements',
    'Insurance compliance',
    'Anti-corruption policies',
    'Fair pricing standards'
  ];

  return (
    <div className="space-y-6">
      <Card className="shadow-xl border-0 bg-gradient-to-br from-green-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-2xl">
            <Shield className="h-8 w-8 text-green-600" />
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Safety & Compliance Standards
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6 border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              <strong>PNG Safety Initiative:</strong> Adir Transportation is committed to addressing safety, corruption, and service quality issues in Papua New Guinea's transport sector.
            </AlertDescription>
          </Alert>
          
          <div className="grid md:grid-cols-2 gap-4">
            {safetyMeasures.map((measure, index) => {
              const IconComponent = measure.icon;
              return (
                <Card key={index} className="border-2 border-gray-100 hover:border-green-200 transition-all">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <IconComponent className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold">{measure.title}</h4>
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            Active
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">{measure.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Regulatory Compliance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {complianceAreas.map((area, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg bg-gradient-to-br from-red-50 to-orange-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-red-700">
              <AlertTriangle className="h-6 w-6" />
              <span>Emergency Protocols</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 bg-white rounded-lg border border-red-200">
                <h5 className="font-semibold text-red-800 mb-1">Police Emergency</h5>
                <p className="text-sm text-red-600">Call 000 or use in-app emergency button</p>
              </div>
              
              <div className="p-3 bg-white rounded-lg border border-orange-200">
                <h5 className="font-semibold text-orange-800 mb-1">Medical Emergency</h5>
                <p className="text-sm text-orange-600">Call 111 or contact nearest hospital</p>
              </div>
              
              <div className="p-3 bg-white rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-800 mb-1">Transport Support</h5>
                <p className="text-sm text-blue-600">24/7 customer service: +675 123 4567</p>
              </div>
            </div>
            
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
              <Phone className="h-4 w-4 mr-2" />
              Emergency Contact
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SafetyCompliance;